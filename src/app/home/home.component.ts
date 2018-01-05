import { Component, OnInit, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import { ScrollableComponent } from '../scrollable/scrollable.component';
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
    console.log(this.scrollable);

    this.mainPageContainer = this.scrollable.child as HTMLElement;
    this.mainPageContainerOffsetY = this.mainPageContainer.offsetTop;
  }

  @HostListener('window:scroll', ['$event']) private onScroll(event: Event): void {

    const currPos: number = document.documentElement.scrollTop + 80;
    console.log(currPos);
    const a = this.scrollable.el.firstChild as HTMLElement;
    if (currPos >= this.mainPageContainerOffsetY) {
      /* document.documentElement.scrollTop = 220; */
      a.setAttribute('style', 'height:100%;overflow-y:scroll');
    } else {
      a.setAttribute('style', 'height:100%;overflow-y:hidden');
    }

  }



}
