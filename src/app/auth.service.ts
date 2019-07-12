import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private access = false;
  private userID: number;

  constructor() { }

  isEnabled() {
    return this.access;
  }

  disallow () {
    this.access =false;

  }
  allow() {
    this.access =true;
  }
  allowUsers(id) {
    this.access = true;
    this.userID = id;
    console.log(this.userID, id);
  }


}
