import { Component, OnInit } from '@angular/core';
import { Task1Service } from "./../task-1.service";
import { from } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  rates: Array<object> = [];
  constructor(private task1Service: Task1Service) {

   }

  ngOnInit() {
  }
  currencyget(value){
    this.rates.push(value);
    return this

  }


}
