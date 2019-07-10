import { Injectable } from '@angular/core';
import { data } from "./currencies";
import {  Observable, Subscriber, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {
  selectedCurrency;
  currencies;
  Observer;
  constructor(private httpClient: HttpClient) {
    this.currencies = data;
    this.Observer = new Observable(this.subscribe());

   }


  subscribe() {
    return (subscriber) => {
      for(const currency of this.currencies){
        let i = 0;
        from(this.currencies).subscribe(currency => {
        const url = `https://api.exchangeratesapi.io/latest?symbols=${currency}`;
        this.httpClient
          .get(url)
          .subscribe(value =>{
            subscriber.next(value);
            i++;
            if(i === this.currencies.length){
              subscriber.complete();
            }
            
          });
        })
      }
    }
  }

  getcurrency(){
    return this.currencies;
  }
  base(value) {

    return this.currencies.data[value];

  }

  symbol(value2) {
    return this.currencies.data[value2];
  }



  setCurrency() {
  return this.selectedCurrency;
  }
}
