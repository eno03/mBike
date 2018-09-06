import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import PostService from "./post.service";
import { apiUrl, getAuthHeaders, prepareFormData } from "../constants";

@Injectable()
export class DataService extends PostService {
  private selectedBike = new BehaviorSubject("");
  currentBike = this.selectedBike.asObservable();

  private selectedTour = new BehaviorSubject("");
  currentTour = this.selectedTour.asObservable();

  changeBike(id: number) {
    this.selectedBike.next(id.toString());
  }

  changeTour(id: number) {
    this.selectedTour.next(id.toString());
  }

  rentBike(item: Object, id: number) {
    let url = apiUrl + "rentBike.php";
    let headers = getAuthHeaders();
    let data = prepareFormData(item);
    console.log(data);
    // this.http
    //   .post(url, data, { headers: headers })
    //   .map(res => res)
    //   .subscribe(data => data);
  }
}
