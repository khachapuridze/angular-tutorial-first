import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class UsersService {
    static GetUsers() {
      
    }

    constructor() { }

    wishlist = [];

    addToUsers(user) {

        this.wishlist.push(user);
    }

    getUsers() {

        return this.wishlist;
    }

    Users() {

        this.wishlist = [];
        return this.wishlist;
    }
}
