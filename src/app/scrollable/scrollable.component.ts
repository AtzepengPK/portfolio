import { Component, OnInit, HostListener, Input, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import { Scrollable } from './scrollable.class';
import { MainSection, MainSectionConfig } from './mainSection.class';
import { DetailSection, DetailSectionConfig } from './detailSection.class';

@Component({
  selector: 'portfolio-scrollable',
  templateUrl: './scrollable.component.html',
  styleUrls: ['./scrollable.component.scss'],
})
export class ScrollableComponent implements OnInit {

  @Input()
  selector: String = 'mainSection';
  el: Element;
  child: Element;

  scrollable: Scrollable;

  constructor(private myElement: ElementRef) {
    this.el = this.myElement.nativeElement as HTMLElement;

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

  ngOnInit() {
    console.log('input1 ' + this.selector);
    console.log(this.myElement);
    this.child = this.el.firstChild as Element;

  }

}
