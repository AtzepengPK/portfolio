import {
  Component, OnInit, ViewChild, ElementRef, trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { ScrollfixedDirective } from '../scrollfixed/scrollfixed.directive';
import { ScrollableComponent } from '../scrollable/scrollable.component';
import { ScrollableService } from '../scrollable/scrollable.service';

@Component({
  selector: 'portfolio-lateral-toolbar',
  templateUrl: './lateral-toolbar.component.html',
  styleUrls: ['./lateral-toolbar.component.scss'],
  animations: [
    trigger('scrollActive', [
      state('true', style({
        borderBottomColor: "green"
      })),
      state('false', style({
        borderBottomColor: "red"
      })),
      transition('true <=> false',[
        style({
          width: "0%"
        }),animate('250ms linear')
      ])])
  ]
})
export class LateralToolbarComponent implements OnInit {

  anchorLinks: Observable<any[]>;
  scrollStatus: boolean;
  scrollStatusColor: String;

  constructor(private _data: DataService, private ScrollableService: ScrollableService) {
  }

  ngOnInit() {
    this.anchorLinks = this._data.getScrollable();
    this.ScrollableService.isEnabled.subscribe(x => {
      this.scrollStatus = x;
      this.scrollStatusColor = x ? "#00C853" : "#ff5252";
    })
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

      this.ScrollableService.disable();

      jQuery(scrollableContainer).stop().animate({
        scrollTop: scrollTo
      }, 600, () => this.ScrollableService.enable());
    }



  }

  toogleScroll() {
    this.ScrollableService.toogle();
  }


}
