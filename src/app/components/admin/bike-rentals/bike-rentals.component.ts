import { Component, OnInit } from "@angular/core";
import User from "../../../models/user";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { AdminService } from "../../../services/admin.service";
import { UserService } from "../../../services/user.service";
import { BookingService } from "../../../services/booking.service";
import Bicycle from "../../../models/bicycle";
import { BikeService } from "../../../services/bike.service";
import UsersService from "../../../services/users.service";
import Rental from "../../../models/rental";

@Component({
  selector: "app-bike-rentals",
  templateUrl: "./bike-rentals.component.html",
  styleUrls: ["./bike-rentals.component.scss"]
})
export class BikeRentalsComponent implements OnInit {
  rentals: Rental[];
  users: User[];
  bicycles: Bicycle[];
  user: User;
  selectedBike;
  selectedUser;
  quantity = 1;
  firstname;
  lastname;
  email;
  address;
  star;
  price: number = 0;
  end;
  delivered = "false";

  constructor(
    private http: Http,
    private router: Router,
    private adminService: AdminService,
    private rentalService: BookingService,
    private bikeService: BikeService,
    private usersService: UsersService,
    private _userService: UserService
  ) {
    if (!localStorage.getItem("token")) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.loadUsers();
    this.loadRentals();
    this.loadBikes();
  }

  loadRentals() {
    this.rentalService.getRentals().subscribe(data => {
      this.rentals = data["rentals"];
    });
  }
  loadBikes() {
    this.bikeService.getBikes().subscribe(data => {
      this.bicycles = data;
    });
  }
  addRental() {
    this.update();
    if (window.confirm("Are sure you want to book this tour?")) {
      this.rentBike();
    }
  }
  rentBike() {
    this.rentalService.rentBike(
      this.selectedBike,
      this.selectedUser,
      this.firstname,
      this.lastname,
      this.address,
      this.star,
      this.end,
      this.quantity,
      this.price,
      "false"
    );
    this.ngOnInit();
  }
  loadUsers() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
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
    });
  }
  changeBike(bike) {
    this.selectedBike = bike.value;
    this.bicycles.forEach(element => {
      if (element.id == this.selectedBike) {
        this.price = element.price;
      }
    });
  }
  changeUser(user) {
    this.selectedUser = user.value;
  }
  update() {
    if (this.showDays() <= 0) {
      this.price = this.price * this.quantity * 1;
    } else {
      this.price = this.price * this.quantity * this.showDays();
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
  isDelivered(id: number, bike_id: number, quantity: number) {
    this.adminService.isDelivered(id, bike_id, quantity);
    this.loadRentals();
  }
  remove(id: number) {
    this.adminService.removeRental(id);
    this.loadRentals();
  }
}
