import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { ScrollfixedDirective } from '../scrollfixed/scrollfixed.directive';

@Component({
  selector: 'portfolio-lateral-toolbar',
  templateUrl: './lateral-toolbar.component.html',
  styleUrls: ['./lateral-toolbar.component.scss']
})
export class LateralToolbarComponent implements OnInit {

  anchorLinks: Observable<any[]>;

  constructor(private _data: DataService) {
  }

  ngOnInit() {
    this.anchorLinks = this._data.getScrollable().map(
      res => {
        return res.map(x => {
          return x.id;
        });
      });
  }

  animateTo(obj: any) {
    const scrollableContainer = $('#scrollableContainer');
    const objPos = $('#' + obj);
    scrollableContainer.css("overflowY", "scroll");

    jQuery(document.documentElement).stop().animate({
      scrollTop: (scrollableContainer.offset().top - 60)
    }, 600);

    const scrollTo = (objPos.position().top + scrollableContainer.scrollTop());

    jQuery(scrollableContainer).stop().animate({
      scrollTop: scrollTo
    }, 600);

  }
}
