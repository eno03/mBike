import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  lat: number = 43.460645;
  lng: number = 19.814920;
  constructor() {}

  ngOnInit() {}
}
