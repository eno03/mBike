import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { apiUrl, getAuthHeaders } from "../constants";
import "rxjs/add/operator/map";
import User from "../models/user";
import Rental from "../models/rental";
import Booking from "../models/booking";

@Injectable()
export class UserService {
  url = apiUrl + "userservice.php";
  urlBookings = apiUrl + "getBookings.php";
  urlRentals = apiUrl + "getUserRentals.php";
  constructor(private _http: Http) {}
  getUser(): Observable<User> {
    let headers = getAuthHeaders();
    return this._http
      .get(this.url, { headers: headers })
      .map((response: Response) => <User>response.json());
  }

  getBookings(): Observable<Booking[]> {
    return this._http
      .get(this.urlBookings, { headers: getAuthHeaders() })
      .map(this.extractDataBooking);
  }

  protected extractDataBooking(res: Response) {
    let obj = JSON.parse(res["_body"]);
    return obj.bookings;
  }

  getRentals(): Observable<Rental[]> {
    return this._http
      .get(this.urlRentals, { headers: getAuthHeaders() })
      .map(this.extractDataRentals);
  }

  protected extractDataRentals(res: Response) {
    let obj = JSON.parse(res["_body"]);
    return obj.rentals;
  }
}
