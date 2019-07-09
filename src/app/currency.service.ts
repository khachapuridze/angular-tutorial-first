import { Injectable } from '@angular/core';
import { data } from "./rates";
import {  Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  result;
  Observer;
  constructor() {
    this.result = this.transforObjectToArray(data.rates);
    this.Observer = new Observable(this.subscribe(Subscriber));

    this.Observer = {
      result: this.result,
      filter: this.filter,
      map: this.map,
      subscribe: this.subscribe,
    };
   }

   transforObjectToArray(object) {
     const result = [];
     const keys = Object.keys(object);
     for(const key of keys){
      const value = object[key];
      const item = {
        currency: key,
        value
      };
      result.push(item);
    }
    return result;

   }

   filter(cb) {
    this.result = this.result.filter(cb);
    return this;
   }

   map(cb) {
    this.result = this.result.map(cb);
    return this;
   }




  subscribe(subscriber) {
    return () => {
  
   
    let id = 0;

    for(const item of this.result){
      setTimeout(() =>{
        subscriber.next(item);
      },id * 50);
      id++;
    };

    setTimeout(() =>{
      subscriber.complete();
    },id * 50);
  }
}
}
