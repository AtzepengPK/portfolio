import {
  Component, OnInit, trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/core';
@Component({
  selector: 'portfolio-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('scrollOverHeader', [
      state('white', style({
        backgroundColor: '#fff',
        position: 'fixed',
        top:0
      })),
      state('black', style({
        backgroundColor: '#424242',
        position: 'absolute',
        top: 0
      })),
      transition('black => white', animate('100ms linear')),
      transition('white => black', animate('100ms linear'))
    ]),
  ]
})
export class MenuComponent implements OnInit {

  state: string = 'black';

  constructor() { }

  ngOnInit() {
  }

  makeWhite() {
    this.state = "white";
  }

  makeBlack() {
    this.state = "black";
  }

}
