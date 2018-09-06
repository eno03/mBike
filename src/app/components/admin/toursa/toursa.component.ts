import { Component, OnInit } from "@angular/core";
import Tour from "../../../models/tour";
import User from "../../../models/user";
import { FormGroup, FormControl } from "@angular/forms";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { AdminService } from "../../../services/admin.service";
import { UserService } from "../../../services/user.service";
import TourService from "../../../services/tour.service";

@Component({
  selector: "app-toursa",
  templateUrl: "./toursa.component.html",
  styleUrls: ["./toursa.component.scss"]
})
export class ToursaComponent implements OnInit {
  tours: Tour[];
  user: User;
  addTourForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    url: new FormControl(),
    start: new FormControl(),
    time: new FormControl(),
    price: new FormControl(),
    status_id: new FormControl()
  });

  constructor(
    private http: Http,
    private router: Router,
    private adminService: AdminService,
    private tourService: TourService,
    private _userService: UserService
  ) {
    if (!localStorage.getItem("token")) {
      this.router.navigate(["/"]);
    }
  }

  addTour(model: Tour) {
    this.adminService.addTour(model);
    this.loadTours();
  }

  ngOnInit() {
    this.loadTours();
  }

  loadTours() {
    this.tourService.getTours().subscribe(data => {
      this.tours = data;
    });
  }

  remove(id: number) {
    this.adminService.removeTour(id);
    this.loadTours();
  }
}
