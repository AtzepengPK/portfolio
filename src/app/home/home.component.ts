import { Component, OnInit, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';

import { ScrollableComponent } from '../scrollable/scrollable.component';
import { MenuComponent } from '../menu/menu.component';
import { HeaderComponent } from '../header/header.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private menuOffset: number = 180;
  private cols: Observable<number>;

  constructor(private observableMedia: ObservableMedia,
    private myElement: ElementRef) {

    }

  ngOnInit() {
    /* 
        const grid = new Map([
          ["xs", 1],
          ["sm", 2],
          ["md", 2],
          ["lg", 3],
          ["xl", 3]
        ]);
        let start: number;
        grid.forEach((cols, mqAlias) => {
          if (this.observableMedia.isActive(mqAlias)) {
            start = cols;
          }
        });
        this.cols = this.observableMedia.asObservable()
          .map(change => {
            console.log(change);
            console.log(grid.get(change.mqAlias));
            return grid.get(change.mqAlias);
          })
          .startWith(start); */
  }

}
