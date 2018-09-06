import { Component, OnInit } from "@angular/core";
import Tour from "../../../models/tour";
import { Http } from "@angular/http";
import TourService from "../../../services/tour.service";
import { DataService } from "../../../services/data.service";
import UsersService from "../../../services/users.service";
import User from "../../../models/user";
import { UserService } from "../../../services/user.service";
import { last } from "@angular/router/src/utils/collection";
import { BookingService } from "../../../services/booking.service";
import { AdminService } from "../../../services/admin.service";
import Booking from "../../../models/booking";

@Component({
  selector: "app-tour-bookings",
  templateUrl: "./tour-bookings.component.html",
  styleUrls: ["./tour-bookings.component.scss"]
})
export class TourBookingsComponent implements OnInit {
  selected: number;
  allBookings: Booking[];
  tours: Tour[];
  users: User[];
  isAuth: String;
  selectedTour;
  selectedUser;
  firstname;
  lastname;
  star;
  private sub: any;

  constructor(
    private http: Http,
    private tourService: TourService,
    private data: DataService,
    private usersService: UsersService,
    private userService: UserService,
    private bookingService: BookingService,
    private adminService: AdminService
  ) {
    this.isAuth = localStorage.getItem("token");
  }

  ngOnInit() {
    this.loadTours();
    this.loadUsers();
    this.loadUserBookings();
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
    });
  }
  sentId(id: number) {
    this.selected = id;
    this.data.changeTour(id);
  }
  loadTours() {
    this.tourService.getTours().subscribe(data => (this.tours = data));
  }

  loadUserBookings() {
    this.userService.getBookings().subscribe(data => {
      this.allBookings = data;
    });
  }
  changeTour(tour) {
    this.selectedTour = tour.value;
  }
  changeUser(user) {
    this.selectedUser = user.value;
  }
  addTour() {
    if (window.confirm("Are sure you want to book this tour?")) {
      if (this.getType(this.selectedTour) == 0) {
        this.bookTour(this.star);
      } else {
        this.tours.forEach(element => {
          if (element.id == this.selectedTour) {
            let date = element.start;
            this.bookTour(date);
          }
        });
      }
    }
  }
  bookTour(date) {
    this.bookingService.bookTour(
      this.selectedTour,
      this.firstname,
      this.lastname,
      this.selectedUser,
      date
    );
    this.ngOnInit();
  }
  getType(selectedTour: String) {
    let type = 0;
    this.tours.forEach(element => {
      if (element.id == this.selectedTour) {
        if (element.status_id == 1) {
          type = 1;
        }
      }
    });
    return type;
  }
  remove(title: String, email: String, date: String) {
    this.adminService.removeUserTour(title, email, date);
    this.ngOnInit();
  }
}
