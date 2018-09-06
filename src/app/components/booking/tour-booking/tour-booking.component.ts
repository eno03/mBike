import { Component, OnInit } from "@angular/core";
import User from "../../../models/user";
import Tour from "../../../models/tour";
import { DataService } from "../../../services/data.service";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import TourService from "../../../services/tour.service";
import { UserService } from "../../../services/user.service";
import { BookingService } from "../../../services/booking.service";
import { setRootDomAdapter } from "@angular/platform-browser/src/dom/dom_adapter";

@Component({
  selector: "app-tour-booking",
  templateUrl: "./tour-booking.component.html",
  styleUrls: ["./tour-booking.component.scss"]
})
export class TourBookingComponent implements OnInit {
  user: User;
  userId: number;
  message: string;
  tours: Tour[];
  selected: number;
  email: String;
  firstname: String;
  lastname: String;
  date: String = "";

  constructor(
    private data: DataService,
    private bookingService: BookingService,
    private http: Http,
    private router: Router,
    private tourService: TourService,
    private userService: UserService
  ) {
    if (localStorage.getItem("token") == null) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.loadUser();
    this.data.currentTour.subscribe(message => (this.message = message));
    this.selected = +this.message;
    this.loadTours();
  }
  loadUser() {
    this.userService.getUser().subscribe(data => {
      this.user = data;
      this.firstname = this.user.firstname;
      this.lastname = this.user.lastname;
      this.email = this.user.email;
      this.userId = this.user.id;
      this.tours.forEach(element => {
        if (element.id == this.selected) {
          if (element.status_id == 0) {
            this.date = this.getCurrentDate();
          } else {
            this.date = element.start;
          }
        }
      });
    });
  }

  loadTours() {
    this.tourService.getTours().subscribe(data => (this.tours = data));
  }

  bookTour() {
    if (
      window.confirm(
        this.user.firstname + "\n" + "Are sure you want to book this tour?"
      )
    ) {
      this.bookingService.bookTour(
        this.selected,
        this.firstname,
        this.lastname,
        this.userId,
        this.date
      );
      window.confirm(
        this.firstname +
          "\n" +
          "You just sent a reservation to the mBike system." +
          "\n" +
          "We will contact you to confirm your reservation. Have a nice day! :)"
      );
      this.router.navigate(["/user-bookings"]);
    }
  }

  getCurrentDate() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var monthN = "" + month;
    if (month < 10) {
      monthN = "0" + month;
    }
    var day = d.getDate();
    var dayN = "" + day;
    if (day < 10) {
      dayN = "0" + day;
    }
    return year + "-" + monthN + "-" + dayN;
  }
}
