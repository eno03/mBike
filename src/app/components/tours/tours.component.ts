import { Component, OnInit, OnDestroy } from "@angular/core";
import Tour from "../../models/tour";
import "rxjs/Rx";
import { Http } from "@angular/http";
import { ActivatedRoute } from "@angular/router";
import TourService from "../../services/tour.service";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-tours",
  templateUrl: "./tours.component.html",
  styleUrls: ["./tours.component.scss"]
})
export class ToursComponent implements OnInit {
  selected: number;
  tours: Tour[];
  isAuth: String;
  private sub: any;

  constructor(
    private http: Http,
    private tourService: TourService,
    private data: DataService,
    private route: ActivatedRoute
  ) {
    this.isAuth = localStorage.getItem("token");
  }
  ngOnInit() {
    this.loadTours();
  }
  sentId(id: number) {
    this.selected = id;
    this.data.changeTour(id);
  }
  loadTours() {
    this.tourService.getTours().subscribe(data => (this.tours = data));
  }
}
