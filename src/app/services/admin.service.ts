import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import { Injectable } from "@angular/core";
import PostService from "./post.service";
import { apiUrl, getAuthHeaders, prepareFormData } from "../constants";

@Injectable()
export class AdminService extends PostService {
  url = apiUrl + "addUserService.php";
  urlremove = apiUrl + "removeUserService.php";
  urlremovetour = apiUrl + "removeTour.php";
  urlremoveusertour = apiUrl + "removeUserTour.php";
  urlremovebike = apiUrl + "removeBike.php";
  urlremoverental = apiUrl + "removeRental.php";
  urldelivered = apiUrl + "deliveredBike.php";

  callService(item: Object): Observable<void> {
    this.headers = getAuthHeaders();
    return super.callService(item);
  }

  addUser(item: Object) {
    let url = apiUrl + "addUser.php";
    let headers = getAuthHeaders();
    let data = prepareFormData(item);
    this.http
      .post(url, data, { headers: headers })
      .map(res => res)
      .subscribe(data => data);
  }

  removeUser(id: number) {
    let data = "id=" + id;
    let headers = getAuthHeaders();
    this.http
      .post(this.urlremove, data, { headers: headers })
      .map(res => res)
      .subscribe(data => data);
  }

  addTour(item: Object) {
    let url = apiUrl + "addTour.php";
    let headers = getAuthHeaders();
    let data = prepareFormData(item);
    this.http
      .post(url, data, { headers: headers })
      .map(res => res)
      .subscribe(data => data);
  }

  removeTour(id: number) {
    let data = "id=" + id;
    let headers = getAuthHeaders();
    this.http
      .post(this.urlremovetour, data, { headers: headers })
      .map(res => res)
      .subscribe(data => data);
  }

  removeUserTour(title: String, email: String, date: String) {
    let data = "title=" + title + "&email=" + email + "&date=" + date;
    let headers = getAuthHeaders();
    this.http
      .post(this.urlremoveusertour, data, { headers: headers })
      .map(res => res)
      .subscribe(data => data);
  }

  addBike(item: Object) {
    let url = apiUrl + "addBike.php";
    let headers = getAuthHeaders();
    let data = prepareFormData(item);
    console.log(data);
    this.http
      .post(url, data, { headers: headers })
      .map(res => res)
      .subscribe(data => data);
  }

  removeBike(id: number) {
    let data = "id=" + id;
    let headers = getAuthHeaders();
    this.http
      .post(this.urlremovebike, data, { headers: headers })
      .map(res => res)
      .subscribe(data => data);
  }
  removeRental(id: number) {
    let data = "id=" + id;
    let headers = getAuthHeaders();
    this.http
      .post(this.urlremoverental, data, { headers: headers })
      .map(res => res)
      .subscribe(data => data);
  }

  isDelivered(id: number, bike_id: number, quantity: number) {
    let data =
      "id=" + id + "&bike_id=" + bike_id + "&quantity=" + quantity;
    let headers = getAuthHeaders();
    this.http
      .post(this.urldelivered, data, { headers: headers })
      .map(res => res)
      .subscribe(data => data);
  }
}
