import { Component, OnInit, HostListener, Input, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import { Scrollable } from './scrollable.class';
import { MainSection, MainSectionConfig } from './mainSection.class';
import { DetailSection } from './detailSection.class';

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

  scrollable: Scrollable = new Scrollable();

  constructor(private myElement: ElementRef) {
    this.el = this.myElement.nativeElement as HTMLElement;
    this.scrollable.addSection(new MainSection([
      new DetailSection(1, '1'),
      new DetailSection(2, '2'),
      new DetailSection(3, '3'),
      new DetailSection(4, '4')])
    );
    this.scrollable.addSection(new MainSection([
      new DetailSection(1, '1'),
      new DetailSection(2, '2'),
      new DetailSection(3, '3'),
      new DetailSection(4, '4')], new MainSectionConfig('mainSectionAlternative'))
    );

    console.log(this.scrollable);
  }

  ngOnInit() {
    console.log('input1 ' + this.selector);
    console.log(this.myElement);
    this.child = this.el.firstChild as Element;

  }

}
