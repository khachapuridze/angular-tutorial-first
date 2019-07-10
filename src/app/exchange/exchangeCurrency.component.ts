import { Component, OnInit } from '@angular/core';
import { CurrencyService } from "../currency.service";
import { FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-exchange',
  templateUrl: './exchangeCurrency.component.html',
  styleUrls: ['./exchangeCurrency.component.scss']
})
export class exchangeCurrency implements OnInit {
  currencies;
  currency1;
  currency2;
  exchangeForm;
  constructor(private currencyService: CurrencyService,
    private httpclient: HttpClient,
    private forms: FormBuilder) {
    this.currencies = currencyService.getcurrency();
    this.exchangeForm = forms.group({
      currency1: '',
      currency2: ''
    })
  }

  ngOnInit() {

    
  }
  get currency() {
    return this.exchangeForm.get('currency1') as FormControl;
  }
  get target() {
    return this.exchangeForm.get('currency2') as FormControl;
  }

  Change(value) {
    for(const curr of this.currencies){
      const url = this.httpclient.get(`https://api.exchangeratesapi.io/latest?symbols=${curr}`);
      return url;
    }

  }
}
