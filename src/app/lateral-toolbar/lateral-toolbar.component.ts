import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { ScrollfixedDirective } from '../scrollfixed/scrollfixed.directive';
import { ScrollableComponent } from '../scrollable/scrollable.component';
import { ScrollableService } from '../scrollable/scrollable.service';

@Component({
  selector: 'portfolio-lateral-toolbar',
  templateUrl: './lateral-toolbar.component.html',
  styleUrls: ['./lateral-toolbar.component.scss']
})
export class LateralToolbarComponent implements OnInit {

  anchorLinks: Observable<any[]>;


  constructor(private _data: DataService, private ScrollableService: ScrollableService) {
  }

  ngOnInit() {
    this.anchorLinks = this._data.getScrollable().map(
      res => {
        return res.map((x: any) => {
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

    if (objPos.position().top != 0) {
      const scrollTo = (objPos.position().top + scrollableContainer.scrollTop());

      this.ScrollableService.isEnabled.emit(false);
      
      jQuery(scrollableContainer).stop().animate({
        scrollTop: scrollTo
      }, 600,()=>this.ScrollableService.isEnabled.emit(true));
    }



  }
}
