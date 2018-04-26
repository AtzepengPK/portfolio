import {
  Component, Renderer, OnInit, ViewChild, HostListener, trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  parallax: HTMLElement;

  @ViewChild(MenuComponent) menu: MenuComponent;

  constructor(public renderer: Renderer) { }

  ngOnInit() {
    this.parallax = document.getElementById('textParallax');
  }

  setTranslateY() {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop < 300) {
      const scrollRatio = ((scrollTop / 2));
      const opacityRatio = this.getScrollRatio(scrollTop);

      const textStyle = {
        'opacity': opacityRatio,
        'transform': 'translateY(' + scrollRatio + 'px)'
      };
      return textStyle;
    }


  }

  getScrollRatio(x) {
    if (x < 100) {
      return 1;
    } else if (x >= 120 && x <= 139) {
      return 0.6;
    } else if (x >= 140 && x <= 200) {
      return 0.4;
    } else if (x > 200) {
      return 0.2;
    }
  }


  @HostListener('window:scroll', ['$event']) private onScroll(event: Event): void {
    /* this.parallax.style.paddingTop = this.parallax.style.paddingTop + document.documentElement.scrollTop; */
  }

}


