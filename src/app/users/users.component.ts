import { Component, OnInit } from '@angular/core';
import { WishListService } from './../wishlist.service';
import {UsersService} from "./../user.service";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class UsersComponent implements OnInit {
  users;
  constructor(private usersServise: UsersService) {
    this.users = this.usersServise.getUsers();
  }

  ngOnInit() {
  }

  clearUsers() {
    this.users = [];
  }
  addToUsers(user) {
    window.alert("user has been added!")
    this.usersServise.addToUsers(user)
}
}