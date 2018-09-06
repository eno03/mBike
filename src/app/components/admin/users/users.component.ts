import { Component, OnInit } from "@angular/core";
import User from "../../../models/user";
import { FormGroup, FormControl } from "@angular/forms";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { UserService } from "../../../services/user.service";
import { AdminService } from "../../../services/admin.service";
import UsersService from "../../../services/users.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  users: User[];
  user: User;
  addUserForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    address: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    role_id: new FormControl()
  });

  constructor(
    private http: Http,
    private _router: Router,
    private _adminService: AdminService,
    private _usersService: UsersService,
    private _userService: UserService
  ) {
    if (!localStorage.getItem("token")) {
      this._router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this._usersService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  addUser(model: User) {
    this._adminService.addUser(model);
    this.loadUsers();
  }

  remove(id: number) {
    this._adminService.removeUser(id);
    this.loadUsers();
  }
}
