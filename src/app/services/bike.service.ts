import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { apiUrl, getAuthHeaders } from "../constants";
import Bicycle from "../models/bicycle";

@Injectable({
  providedIn: "root"
})
export class BikeService {
  protected url = apiUrl + "getBikes.php";

  constructor(protected http: Http) {}

  getBikes(): Observable<Bicycle[]> {
    return this.http
      .get(this.url, { headers: getAuthHeaders() })
      .map(this.extractData);
  }

  protected extractData(res: Response) {
    let obj = JSON.parse(res["_body"]);
    return obj.bicycles;
  }
}
