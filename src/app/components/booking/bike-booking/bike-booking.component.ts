import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import User from "../../../models/user";
import Bicycle from "../../../models/bicycle";
import { FormGroup, FormControl } from "@angular/forms";
import { DataService } from "../../../services/data.service";
import { BikeService } from "../../../services/bike.service";
import { UserService } from "../../../services/user.service";
import { BookingService } from "../../../services/booking.service";

@Component({
  selector: "app-bike-booking",
  templateUrl: "./bike-booking.component.html",
  styleUrls: ["./bike-booking.component.scss"]
})
export class BikeBookingComponent implements OnInit {
  user: User;
  message: string;
  bicycles: Bicycle[];
  selected: number;
  selecedPrice: number;
  price = this.selecedPrice;
  quantity = 1;
  firstname;
  lastname;
  user_id;
  email;
  address;
  star;
  end;

  constructor(
    private dataService: DataService,
    private bookingService: BookingService,
    private http: Http,
    private router: Router,
    private bikeService: BikeService,
    private userService: UserService
  ) {
    if (localStorage.getItem("token") == null) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.loadUser();
    this.dataService.currentBike.subscribe(message => (this.message = message));
    this.selected = +this.message;
    this.loadBikes();
  }

  loadUser() {
    this.userService.getUser().subscribe(data => {
      this.user = data;
      this.firstname = this.user.firstname;
      this.lastname = this.user.lastname;
      this.address = this.user.address;
      this.email = this.user.email;
      this.user_id = this.user.id;
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
      this.star = year + "-" + monthN + "-" + dayN;
      this.end = this.star;
      this.update();
      this.bicycles.forEach(element => {
        if (element.id == this.selected) {
          this.selecedPrice = element.price;
        }
      });
    });
  }

  loadBikes() {
    this.bikeService.getBikes().subscribe(data => (this.bicycles = data));
  }

  update() {
    this.bicycles.forEach(element => {
      if (element.id == this.selected) {
        this.selecedPrice = element.price;
      }
    });

    if (this.showDays() <= 0) {
      this.price = this.selecedPrice * this.quantity * 1;
    } else {
      this.price = this.selecedPrice * this.quantity * this.showDays();
    }
  }

  showDays() {
    var startDay = new Date(this.end);
    var endDay = new Date(this.star);
    var millisecondsPerDay = 1000 * 60 * 60 * 24;

    var millisBetween = startDay.getTime() - endDay.getTime();
    var days = millisBetween / millisecondsPerDay;

    return Math.floor(days);
  }

  rentBike() {
    this.update();
    if (
      window.confirm(
        this.firstname + "\n" + "Are sure you want to rent this bike?"
      )
    ) {
      this.bookingService.rentBike(
        this.selected,
        this.user_id,
        this.firstname,
        this.lastname,
        this.address,
        this.star,
        this.end,
        this.quantity,
        this.price,
        "false"
      );
      window.confirm(
        this.firstname +
          "\n" +
          "You just sent a reservation to the mBike system." +
          "\n" +
          "We will contact you to confirm your rental. Have a nice day! :)"
      );
      this.router.navigate(["/user-reservations"]);
    }
  }
}
