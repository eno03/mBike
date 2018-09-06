import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Http } from "@angular/http";
import "rxjs/Rx";
import { Router } from "@angular/router";
import { RegisterService } from "../../services/register.service";
import User from "../../models/user";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  registerForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    address: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private http: Http,
    private router: Router,
    private registerService: RegisterService
  ) {
    if (localStorage.getItem("token") != null) {
      /*localStorage.removeItem('token');*/ /*brisanje tokena ako je neko ulogovan!!!!!*/
      this.router.navigate(["/"]);
    } else {
      this.router.navigate(["/register"]);
    }
  }

  onRegistration(model: User) {
    this.registerService.callService(model).subscribe(data => {
      this.router.navigate(["/login"]);
    });
  }
}
