import { Component, OnInit, HostListener, Input, ElementRef, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { Scrollable } from './classes/scrollable.class';
import { MainSection, MainSectionConfig } from './classes/mainSection.class';
import { DetailSection, DetailSectionConfig } from './classes/detailSection.class';

@Component({
  selector: 'portfolio-scrollable',
  templateUrl: './scrollable.component.html',
  styleUrls: ['./scrollable.component.scss'],
})
export class ScrollableComponent implements OnInit, AfterViewInit {

  private mainPageContainer: HTMLElement;
  private mainPageContainerOffsetY: number;
  scrollable: Scrollable;

  constructor(private myElement: ElementRef) {
    let baseDiv = '<div>ciaoo</div>';

    this.scrollable = new Scrollable([
      new MainSection(baseDiv, [
        new DetailSection(1, '1'),
        new DetailSection(2, '2'),
        new DetailSection(3, '3'),
        new DetailSection(4, '4'),
        new DetailSection(5, '5'),
        new DetailSection(6, '6'),
        new DetailSection(7, '7'),
        new DetailSection(8, '8')]),
      new MainSection(baseDiv, [
        new DetailSection(1, '1'),
        new DetailSection(2, '2'),
        new DetailSection(3, '3'),
        new DetailSection(4, '4')])
    ]);

    console.log(this.scrollable);
  }

  ngAfterViewInit(): void {
    this.mainPageContainer = this.myElement.nativeElement.firstElementChild;
    this.mainPageContainerOffsetY = this.mainPageContainer.offsetTop;
  }

  ngOnInit() {

  }

  @HostListener('window:scroll', ['$event']) private onScroll(event: Event): void {
    const currPos: number = document.documentElement.scrollTop;

    if (currPos >= (this.mainPageContainerOffsetY - 140) && currPos <= (this.mainPageContainerOffsetY - 100)) {
      if (this.scrollable.overflowStatus != 'scroll') {
        this.scrollable.setOverflowScroll();
        document.documentElement.scrollTop = (this.mainPageContainerOffsetY - 120);
      }
    } else {
      if (this.scrollable.overflowStatus != 'hidden')
        this.scrollable.setOverflowHidden();
    }
  }

}
