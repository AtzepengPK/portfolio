import { Component, OnInit, HostListener, Input, ElementRef, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../data.service';
import { ScrollableService } from './scrollable.service';

@Component({
  selector: 'portfolio-scrollable',
  templateUrl: './scrollable.component.html',
  styleUrls: ['./scrollable.component.scss'],
})
export class ScrollableComponent implements OnInit, AfterViewInit {

  private mainPageContainer: HTMLElement;
  private mainPageContainerOffsetY: number;
  scrollableObservable: Observable<any[]>;
  private overflowStatus: String;
  private menuHeight = 60;
  isEnabled: boolean;
  rates: Observable<any[]>;

  constructor(private myElement: ElementRef, private _data: DataService, private scrollableService: ScrollableService) {
  }

  ngAfterViewInit(): void {
    this.mainPageContainer = this.myElement.nativeElement.firstElementChild;
    this.mainPageContainerOffsetY = this.mainPageContainer.offsetTop;
  }

  ngOnInit() {
    this.scrollableObservable = this._data.getScrollable().map(
      (data) => {
        data.sort((a: any, b: any) => {
          return a.order < b.order ? -1 : 1;
        });
        return data;
      }
    );
    this.scrollableService.isEnabled.subscribe(
      x => {
        this.isEnabled = x;
      });

    this.scrollableService.disable();
  }

  @HostListener('window:scroll', ['$event']) private onScroll(event: Event): void {
    const currPos: number = document.documentElement.scrollTop;

    if (currPos >= (this.mainPageContainerOffsetY - (this.menuHeight + 20)) &&
      currPos <= (this.mainPageContainerOffsetY - (this.menuHeight - 20))) {
      if (!this.isEnabled) {
        this.scrollableService.isEnabled.emit(true);
      }
      if (this.overflowStatus !== 'scroll') {
        this.overflowStatus = 'scroll';
        document.documentElement.scrollTop = (this.mainPageContainerOffsetY - this.menuHeight);
      }
    } else {
      if (this.isEnabled) {
        this.scrollableService.isEnabled.emit(false);
      }
      if (this.overflowStatus !== 'hidden') {
        this.overflowStatus = 'hidden';
      }
    }
  }

}
