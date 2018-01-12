import {
  Component, OnInit, HostListener, trigger,
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
        color: '#424242',
        position: 'fixed',
        top: 0
      })),
      state('black', style({
        backgroundColor: '#424242',
        color: '#fff',
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

  toogleState() {
    this.state = this.state == 'black' ? 'white' : 'black'
  }
  makeWhite() {
    this.state = "white";
  }

  makeBlack() {
    this.state = "black";
  }

  @HostListener('window:scroll', ['$event']) private onScroll(event: Event): void {
    const currPos: number = document.documentElement.scrollTop;

    if (currPos >= 200) {
      if (this.state !== 'white')
        this.toogleState();
    } else {
      if (this.state !== 'black')
        this.toogleState();
    }
  }

}
