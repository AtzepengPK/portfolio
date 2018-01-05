import { Component, OnInit, HostListener, Input, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'portfolio-scrollable',
  templateUrl: './scrollable.component.html',
  styleUrls: ['./scrollable.component.scss'],
})
export class ScrollableComponent implements OnInit {

  @Input()
  selector: String = "mainSection";
  el: Element;
  child: Element;

  constructor(private myElement: ElementRef) {
    this.el = this.myElement.nativeElement as HTMLElement;
  }

  ngOnInit() {
    console.log("input1 " + this.selector);
    console.log(this.myElement);
    this.child = this.el.firstChild as Element;

  }

}
