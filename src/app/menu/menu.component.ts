import {
  Component, OnInit, HostListener, trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../data.service';


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
    trigger('scrollOverHeaderText', [
      state('white', style({
        color: '#424242'
      })),
      state('black', style({
        color: '#fff'
      }))
    ])
  ]
})
export class MenuComponent implements OnInit {

  state = 'black';
  menuItems: Observable<any[]>;

  constructor(private _data: DataService) { }

  ngOnInit() {
    this.menuItems = this._data.getMenuItems();
  }

  toogleState() {
    this.state = this.state === 'black' ? 'white' : 'black';
  }
  makeWhite() {
    this.state = 'white';
  }

  makeBlack() {
    this.state = 'black';
  }

  @HostListener('window:scroll', ['$event']) private onScroll(event: Event): void {
    const currPos: number = document.documentElement.scrollTop;

    if (currPos >= 200) {
      if (this.state !== 'white') {
        this.toogleState();
      }
    } else {
      if (this.state !== 'black') {
        this.toogleState();
      }
    }
  }
}
