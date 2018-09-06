import { Component, OnInit } from "@angular/core";
import User from "../../../models/user";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { UserService } from "../../../services/user.service";
import Rental from "../../../models/rental";

@Component({
  selector: "app-user-reservations",
  templateUrl: "./user-reservations.component.html",
  styleUrls: ["./user-reservations.component.scss"]
})
export class UserReservationsComponent implements OnInit {
  allRentals: Rental[];
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
    this.loadUserRentals();
  }
  loadUser() {
    this._userService.getUser().subscribe(data => {
      this.user = data;
      this.userEmail = this.user.email;
      this.allRentals.forEach(element => {
        if (element.email == this.userEmail) {
          this.active = 1;
        }
      });
    });
  }
  loadUserRentals() {
    this._userService.getRentals().subscribe(data => {
      this.allRentals = data;
    });
  }
}
