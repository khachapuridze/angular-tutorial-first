import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Task1Service {

  constructor(private httpClient: HttpClient) { 

  }

   currency(){
    const url = `https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR`;
    const currency = Object.keys(url)[0];
    const value = url[currency];
    return this.httpClient.get(url);
  }
}
