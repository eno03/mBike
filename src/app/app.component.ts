import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import User from "./models/user";
import { UserService } from "./services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  user: User;
  router: Router;
  isAuth: Boolean;

  constructor(router: Router, private _userService: UserService) {
    /*   this.token.token = JSON.parse(localStorage.getItem('token'));*/
    this.router = router;
    this.router.events.subscribe(() => {
      this.isAuth = localStorage.getItem("token") !== null;
      if (localStorage.getItem("token") !== null) {
        this.loadUser();
      }
    });
  }
  ngOnInit() {
    if (localStorage.getItem("token") !== null) {
      this.loadUser();
    }
  }
  loadUser() {
    this._userService.getUser().subscribe(data => (this.user = data));
  }
  onLogout(): void {
    this.router.navigate(["./"]);
    localStorage.removeItem("token");
    this.isAuth = localStorage.getItem("token") !== null;
  }
}
