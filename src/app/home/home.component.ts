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
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(ScrollableComponent) scrollable: ScrollableComponent;
  @ViewChild(HeaderComponent) header: HeaderComponent;


  private menuOffset: number = 180;
  private cols: Observable<number>;
  private mainPageContainer: HTMLElement;
  private mainPageContainerOffsetY: number;

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

  ngAfterViewInit(): void {
    console.log("scroll ref");
    console.log(this.scrollable);
    console.log(this.header);

    this.mainPageContainer = this.scrollable.el.firstElementChild as HTMLElement;

    console.log("mainPageContainer ref");
    console.log(this.mainPageContainer);

    this.mainPageContainerOffsetY = this.mainPageContainer.offsetTop;

    console.log("mainPageContainerOffsetY ref");
    console.log(this.mainPageContainerOffsetY);
  }

  @HostListener('window:scroll', ['$event']) private onScroll(event: Event): void {

    const currPos: number = document.documentElement.scrollTop;
    console.log(currPos);

    if (currPos >= this.mainPageContainerOffsetY - 240) {
      if (this.header.menu.state !== 'white')
        this.header.menu.makeWhite();
    } else {
      if (this.header.menu.state !== 'black')
        this.header.menu.makeBlack();
    }

    if (currPos >= (this.mainPageContainerOffsetY - 140) && currPos <= (this.mainPageContainerOffsetY - 100)) {
      console.log("DADA SD AD ASD A")
      if (this.scrollable.scrollable.overflowStatus != 'scroll') {
        this.scrollable.scrollable.setOverflowScroll();
        document.documentElement.scrollTop = (this.mainPageContainerOffsetY - 120);
      } else {
        console.log("else");
      }
    } else {
      if (this.scrollable.scrollable.overflowStatus != 'hidden')
        this.scrollable.scrollable.setOverflowHidden();
    }

    /*  if (currPos >= (this.mainPageContainerOffsetY)) {
       if (this.scrollable.scrollable.overflowStatus != 'hidden') {
         this.scrollable.scrollable.setOverflowHidden();
         document.documentElement.scrollTop = (this.mainPageContainerOffsetY - 120);
       }
     } */
  }



}
