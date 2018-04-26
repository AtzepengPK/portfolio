import { Component, OnInit, HostListener, Input, ElementRef, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

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

  constructor(private myElement: ElementRef, private db: AngularFireDatabase, private _firebaseAuth: AngularFireAuth) {
  }

  ngAfterViewInit(): void {
    this.mainPageContainer = this.myElement.nativeElement.firstElementChild;
    this.mainPageContainerOffsetY = this.mainPageContainer.offsetTop;
  }

  ngOnInit() {
    this._firebaseAuth.auth.signInAnonymously();
    this.scrollableObservable = this.getScrollable('/scrollable');
    this.scrollableObservable.subscribe(value => console.log(value));
  }

  getScrollable(listPath): Observable<any[]> {

    return this.db.list(listPath).valueChanges();
  }

  @HostListener('window:scroll', ['$event']) private onScroll(event: Event): void {
    const currPos: number = document.documentElement.scrollTop;

    if (currPos >= (this.mainPageContainerOffsetY - 140) && currPos <= (this.mainPageContainerOffsetY - 100)) {
      if (this.overflowStatus !== 'scroll') {
        this.overflowStatus = 'scroll';
        document.documentElement.scrollTop = (this.mainPageContainerOffsetY - 120);
      }
    } else {
      if (this.overflowStatus !== 'hidden') {
        this.overflowStatus = 'hidden';
      }
    }
  }

}
