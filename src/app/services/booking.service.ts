import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import { Injectable } from "@angular/core";
import PostService from "./post.service";
import { apiUrl, getAuthHeaders, prepareFormData } from "../constants";
import { last } from "rxjs/operators";
import Rental from "../models/rental";

@Injectable()
export class BookingService extends PostService {
  protected geturl = apiUrl + "getRentals.php";

  callService(item: Object): Observable<void> {
    this.headers = getAuthHeaders();
    return super.callService(item);
  }

  getRentals(): Observable<Rental[]> {
    return this.http
      .get(this.geturl, { headers: getAuthHeaders() })
      .map(this.extractData);
  }

  rentBike(
    id: number,
    user_id: number,
    firstname,
    lastname,
    address,
    start,
    end,
    quantity: number,
    price: number,
    delivered
  ) {
    let url = apiUrl + "rentBike.php";
    let headers = getAuthHeaders();
    let data =
      "bike_id=" +
      id +
      "&user_id=" +
      user_id +
      "&firstname=" +
      firstname +
      "&lastname=" +
      lastname +
      "&address=" +
      address +
      "&start=" +
      start +
      "&end=" +
      end +
      "&quantity=" +
      quantity +
      "&price=" +
      price +
      "&delivered=" +
      delivered;
    this.http
      .post(url, data, { headers: headers })
      .map(res => res)
      .subscribe(data => data);
  }

  bookTour(id, firstname, lastname, userId, date) {
    let url = apiUrl + "bookTour.php";
    let headers = getAuthHeaders();
    let data =
      "tour_id=" +
      id +
      "&userId=" +
      userId +
      "&firstname=" +
      firstname +
      "&lastname=" +
      lastname +
      "&date=" +
      date;
    this.http
      .post(url, data, { headers: headers })
      .map(res => res)
      .subscribe(data => data);
  }
}
