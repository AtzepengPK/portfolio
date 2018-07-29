import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'portfolio-skill-pie',
  templateUrl: './skill-pie.component.html',
  styleUrls: ['./skill-pie.component.scss']
})
export class SkillPieComponent implements OnInit, AfterViewInit {

  _data;
  total = 0;
  rates = [];
  svg;
  colors = ["red", "blue", "yellow", "green", "purple", "azure", "brown", "orange"];

  @Input()
  set data(data: Array<any>) {
    this._data = data;
    this.total = 0;
    data.forEach(element => {
      this.total += element.rate;
      this.rates.push(element.rate);
    });
  }
  @Input() id;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.svg = document.getElementById('donut-' + this.id);
    var svgNS = "http://www.w3.org/2000/svg";
    let currentSum = 0;
    let oldElement = 0;
    let x = 0;
    this.rates.forEach((element, i) => {
      let num = this.to100(element, this.total);
      let circle = document.createElementNS(svgNS, "circle");
      currentSum = x - oldElement + 25;
      circle.classList.add("donut-segment");
      circle.setAttribute("cx", "31");
      circle.setAttribute("cy", "31");
      circle.setAttribute("r", "15.91549430918954");
      circle.setAttribute("fill", "transparent");
      circle.setAttribute("stroke", this.colors[i]);
      circle.setAttribute("stroke-width", "10");
      circle.setAttribute("stroke-dasharray", num + " " + (100 - num));
      circle.setAttribute("stroke-dashoffset", currentSum.toString());

      oldElement += num;
      x = 100;

      this.svg.appendChild(circle);
    });

    let g = document.createElementNS(svgNS, "g");
    let i = document.createElementNS(svgNS, "text") as HTMLElement;
    i.innerHTML = "view_carousel";
    i.setAttribute("x", "50%");
    i.setAttribute("y", "50%");
    i.classList.add("material-icons");
    i.style.fontSize = "1em";
    i.style.fill = "red";
    i.style.textAnchor = "middle";
    i.style.transform = " translateY(0.3em)";
    g.appendChild(i);

    this.svg.appendChild(g);
  }

  /*<i class="material-icons md-24 scroll-icon" [style.color]="scrollStatusColor">
      view_carousel
    </i>*/

  to100(int: number, total: number) {

    return (100 * int) / total;
  }
}

