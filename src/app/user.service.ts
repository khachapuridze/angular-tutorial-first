import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class UsersService {
    static GetUsers() {
      
    }

    constructor() { }

    usersList = [];

    addToUsers(user) {
        this.usersList.push(user);
    }

    getUsers() {

        return this.usersList;
    }
    geUserEmail(value) {
        return this.usersList.find(user => user.email === value);
    }

}
