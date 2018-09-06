import { Component, OnInit } from "@angular/core";
import Booking from "../../../models/booking";
import User from "../../../models/user";
import { Router } from "@angular/router";
import { UserService } from "../../../services/user.service";
import { Http } from "@angular/http";

@Component({
  selector: "app-user-bookings",
  templateUrl: "./user-bookings.component.html",
  styleUrls: ["./user-bookings.component.scss"]
})
export class UserBookingsComponent implements OnInit {
  bookings: Booking[];
  user: User;
  userEmail = "";
  active: number = 0;
  constructor(
    private _http: Http,
    private _router: Router,
    private _userService: UserService
  ) {
    if (!localStorage.getItem("token")) {
      this._router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.loadUser();
    this.loadUserBookings();
  }
  loadUser() {
    this._userService.getUser().subscribe(data => {
      this.user = data;
      this.userEmail = this.user.email;
      this.bookings.forEach(element => {
        if (element.email == this.userEmail) {
          this.active = 1;
        }
      });
    });
  }
  loadUserBookings() {
    this._userService.getBookings().subscribe(data => {
      this.bookings = data;
    });
  }
}
