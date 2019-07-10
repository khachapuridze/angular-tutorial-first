import { Component, OnInit } from '@angular/core';
import { ExchangeCurrencyService } from '../exchange-currency.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-exchangeCurrency',
  templateUrl: './exchangeCurrency.component.html',
  styleUrls: ['./exchangeCurrency.component.scss']
})
export class exchangeCurrency implements OnInit {
  currencies;
  form;
  base = '';
  currency = '';
  rate = 1;
  result;

  constructor(private exchangeCurrencyService: ExchangeCurrencyService,
    private exchangeForm: FormBuilder) {
    this.currencies = this.exchangeCurrencyService.getCurrencies();

    this.form = this.exchangeForm.group({
      currency1: '',
      input1: '',
      input2: '',
      currency2: ''
    });
  }

  onChangeCurrency(val) {
    this.currency = val;
    this.getRate(this.base, this.currency);
    this.updateResult('input2');
  }

  onChangeBase(val) {
    this.base = val;
    this.getRate(this.base, this.currency);
    this.updateResult('input1');
  }

  onChange1(val) {
    this.result = val;

    this.updateResult('input1');
  }

  onChange2(val) {
    this.result = val;

    this.updateResult('input2');
  }

  getRate(base, cur) {
    this.exchangeCurrencyService.getRates(base, cur).subscribe(value => {
      this.rate = value['rates'][cur];
    });
  }

  updateResult(amount) {
    if (this.rate && this.result) {
      const res = +this.rate * +this.result;
      if (amount === 'input2') {
        this.form.get('input1').setValue(res);
      } else {
        this.form.get('input2').setValue(res);
      }
    }
  }

  ngOnInit() { }
}