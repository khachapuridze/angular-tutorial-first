import { Component, OnInit } from '@angular/core';
import { CurrencyService } from "./../currency.service";
import { from } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  currency1;
  currency2;
  constructor(private currencyService: CurrencyService) {

   }

  ngOnInit() {
  }
  currencyget(value){

    
  }


}
