import { Directive, ElementRef, Renderer, HostListener, Input, AfterViewInit } from '@angular/core';
import { AnimationBuilder, trigger, state, style, transition, animate } from '@angular/animations';
// tslint:disable-next-line:import-blacklist
import { Subject } from 'rxjs/Rx';
import * as $ from 'jquery';

/**
 * Directive that bla bla
 * @export
 * @class ScrollfixedDirective
 * @implements {AfterViewInit}
 */
@Directive({
  selector: '[portfolioScrollFixed]',
})
export class ScrollfixedDirective implements AfterViewInit {
  @Input() scrollSelector: string;

  private objs: NodeListOf<Element>;
  private resizeSubject = new Subject<Event>();
  private resizeObservable = this.resizeSubject.asObservable().throttleTime(1100);

  private i = 0;
  private posOld = 0;

  constructor(private el: ElementRef) {
    this.resizeObservable.subscribe(x => this.onScrollLogic(x, this.scrollSelector));
  }

  ngAfterViewInit(): void {
    this.objs = document.getElementsByClassName(this.scrollSelector);
  }

  @HostListener('scroll', ['$event']) private onScroll(event: Event): void {
      this.resizeSubject.next(event);
  }

  private onScrollLogic(event: Event, sel: string) {

    const isMain = sel === 'mainSection' ? true : false;

    const posNew = $(event.srcElement).scrollTop();
    console.log(posNew);

    const dir: boolean = posNew >= this.posOld ? true : false;
    let outer;
    let doAnimate = false;

    if (dir) {
      if (this.i < (this.objs.length - 1)) {
        if (!isMain) {
          this.i++;
        }
        this.i++;
        console.log('giu');
        outer = jQuery(this.objs[this.i]).outerHeight() + 1;
        doAnimate = true;
      } else {
        doAnimate = false;
      }
    } else {
      if (this.i !== 0) {
        if (!isMain) {
          this.i--;
        }
        this.i--;
        console.log('su');
        outer = (jQuery(this.objs[this.i]).outerHeight() * -1) - 1;
        doAnimate = true;
      } else {
        doAnimate = false;
      }
    }

    if (doAnimate) {
      this.posOld += outer;

      jQuery(this.el.nativeElement).stop().animate({
        scrollTop: this.posOld
      }, 1000);
    }

    console.log(this.posOld);
  }



}
