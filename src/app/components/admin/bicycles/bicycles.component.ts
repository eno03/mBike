import { Component, OnInit } from "@angular/core";
import User from "../../../models/user";
import { FormGroup, FormControl } from "@angular/forms";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { AdminService } from "../../../services/admin.service";
import { UserService } from "../../../services/user.service";
import { BikeService } from "../../../services/bike.service";
import Bicycle from "../../../models/bicycle";

@Component({
  selector: "app-bicycles",
  templateUrl: "./bicycles.component.html",
  styleUrls: ["./bicycles.component.scss"]
})
export class BicyclesComponent implements OnInit {
  bicycles: Bicycle[];
  user: User;

  addBicycleForm = new FormGroup({
    brand_id: new FormControl(),
    model: new FormControl(),
    type_id: new FormControl(),
    description: new FormControl(),
    url: new FormControl(),
    quantity: new FormControl(),
    price: new FormControl()
  });

  constructor(
    private http: Http,
    private router: Router,
    private adminService: AdminService,
    private bikeService: BikeService,
    private _userService: UserService
  ) {
    if (!localStorage.getItem("token")) {
      this.router.navigate(["/"]);
    }
  }

  addBike(model: Bicycle) {
    this.adminService.addBike(model);
    this.loadBikes();
  }

  ngOnInit() {
    this.loadBikes();
  }

  loadBikes() {
    this.bikeService.getBikes().subscribe(data => {
      this.bicycles = data;
    });
  }

  remove(id: number) {
    this.adminService.removeBike(id);
    this.loadBikes();
  }
}
