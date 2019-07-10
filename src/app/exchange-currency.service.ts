import { Injectable } from '@angular/core';
import { data } from './currencies'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExchangeCurrencyService {
  currencies;
  constructor(private httpClient: HttpClient) {

    this.currencies = data;

  }

  getcurrency() {
    return this.currencies;
  }
  getRates(base, symbol) {
    const url = `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbol}`;
    return this.httpClient.get(url);
 }

 get ChangeValue() {
   return this.currencies.ChangeValue;
 }
 setValue() {
   return this.currencies.data;
 }
}
