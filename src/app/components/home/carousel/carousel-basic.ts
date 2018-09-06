import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";

@Component({
  selector: "app-carousel-basic",
  templateUrl: "./carousel-basic.html",
  styleUrls: ["./carousel-basic.scss"]
})
export class NgbdCarouselBasic implements OnInit {
  images = [
    "https://s14761.pcdn.co/wp-content/uploads/sites/2/2016/06/Trek-Powerfly-FS-05-2000x500.jpg",
    "https://s14761.pcdn.co/wp-content/uploads/sites/2/2016/04/Barcelona-Travel-CB-Web-32-2000x500.jpg",
    "https://s14761.pcdn.co/wp-content/uploads/sites/3/2017/04/ENVE-SES-3.4-22-2000x500.jpg"
  ];

  constructor() {}

  ngOnInit() {}
}
