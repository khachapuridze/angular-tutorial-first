import { Component, OnInit } from '@angular/core';
import { trigger, style, state, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [
    trigger('openClose',[
      state('open',style({
        left: 'calc(50% - #{30px / 2})'
      })),

      state('close',style({
        display: 'none'
      })),
      transition('* => *',[
        animate('1s')
      ])

    ])
  ]
})
export class LoaderComponent implements OnInit {

  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  showMenu() {
    this.isOpen =true;
  }

}
