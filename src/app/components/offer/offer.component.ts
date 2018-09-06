import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import Bicycle from "../../models/bicycle";
import { Http } from "@angular/http";
import { BikeService } from "../../services/bike.service";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../services/data.service";
import { ignoreElements } from "rxjs-compat/operator/ignoreElements";

@Component({
  selector: "app-offer",
  templateUrl: "./offer.component.html",
  styleUrls: ["./offer.component.scss"]
})
export class OfferComponent implements OnInit {
  selected: number;
  bicycles: Bicycle[];
  selectedBicycles: Bicycle[];
  isAuth: String;

  private sub: any;

  constructor(
    private http: Http,
    private bikeService: BikeService,
    private data: DataService,
    private route: ActivatedRoute
  ) {
    this.isAuth = localStorage.getItem("token");
  }

  ngOnInit() {
    this.loadBikes();
  }

  sentId(id: number) {
    this.selected = id;
    this.data.changeBike(id);
  }

  loadBikes() {
    this.bikeService
      .getBikes()
      .subscribe(
        data => ((this.bicycles = data), (this.selectedBicycles = data))
      );
  }

  getCityBikes() {
    let cities: Bicycle[] = new Array();
    this.bicycles.forEach(element => {
      if (element.type_id == 1) {
        cities.push(element);
      }
    });
    this.selectedBicycles = cities;
  }

  getMountainBikes() {
    let mountains: Bicycle[] = new Array();
    this.bicycles.forEach(element => {
      if (element.type_id == 2) {
        mountains.push(element);
      }
    });
    this.selectedBicycles = mountains;
  }

  getRoadBikes() {
    let roads: Bicycle[] = new Array();
    this.bicycles.forEach(element => {
      if (element.type_id == 3) {
        roads.push(element);
      }
    });
    this.selectedBicycles = roads;
  }

  getEbikes() {
    let ebikes: Bicycle[] = new Array();
    this.bicycles.forEach(element => {
      if (element.type_id == 4) {
        ebikes.push(element);
      }
    });
    this.selectedBicycles = ebikes;
  }
}
