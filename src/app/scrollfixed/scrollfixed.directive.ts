import { Directive, ElementRef, Renderer, HostListener, Input, AfterViewInit } from '@angular/core';
import { AnimationBuilder, trigger, state, style, transition, animate } from '@angular/animations';
import { Subject } from 'rxjs';
import * as $ from 'jquery';

@Directive({
  selector: '[Scrollfixed]',
})
export class ScrollfixedDirective implements AfterViewInit {
  @Input('scrollSelector') selector: string;

  private objs: NodeListOf<Element>;
  private resizeSubject = new Subject<Event>();
  private resizeObservable = this.resizeSubject.asObservable().throttleTime(1100);

  private i = 0;
  private posOld = 0;

  constructor(private el: ElementRef) {
    this.resizeObservable.subscribe(x => this.onScrollLogic(x, this.selector));
  }

  ngAfterViewInit(): void {
    this.objs = document.getElementsByClassName(this.selector);
  }

  @HostListener('scroll', ['$event']) private onScroll(event: Event): void {
      this.resizeSubject.next(event);
  }

  private onScrollLogic(event: Event, sel: string) {

    let isMain = sel == "mainSection" ? true : false;

    let posNew = $(event.srcElement).scrollTop();
    console.log(posNew);

    let dir: boolean = posNew >= this.posOld ? true : false;
    let outer;
    let animate: boolean = false;

    if (dir) {
      if (this.i < (this.objs.length - 1)) {
        if (!isMain) {
          this.i++;
        }
        this.i++;
        console.log("giu");
        outer = jQuery(this.objs[this.i]).outerHeight() + 1;
        animate = true;
      } else {
        animate = false;
      }
    } else {
      if (this.i != 0) {
        if (!isMain) {
          this.i--;
        }
        this.i--;
        console.log("su");
        outer = (jQuery(this.objs[this.i]).outerHeight() * -1) - 1;
        animate = true;
      } else {
        animate = false;
      }
    }

    if (animate) {
      this.posOld += outer;

      jQuery(this.el.nativeElement).stop().animate({
        scrollTop: this.posOld
      }, 1000);
    }

    console.log(this.posOld);
  }



}
