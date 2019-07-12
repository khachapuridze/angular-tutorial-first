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

    getAll() {
        return this.usersList;
    }
    verify(email, pass) {
        return this.usersList.findIndex(user => user.email === email && user.password === pass);
    }



}
