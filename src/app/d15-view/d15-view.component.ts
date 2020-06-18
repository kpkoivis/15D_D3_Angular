import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as d3 from 'd3';
import { line } from 'd3';

@Component({
  selector: 'app-d15-view',
  templateUrl: './d15-view.component.html',
  styleUrls: ['./d15-view.component.css']
})
export class D15ViewComponent implements OnInit, AfterViewInit {

  @ViewChild('chart') private chartContainer: ElementRef;



  xScale = d3.scaleLinear().domain([0, 10]).range([0, 2000]);

  x2Scale = d3.scaleBand()
    .domain(['Liikuntakyky', 'Näkö', 'Kuulo', 'Hengitys', 'Nukkuminen', 'Syöminen', 'Puhe', 'Eritys',
      'Tavanomaiset toiminnot', 'Henkinen toiminta', 'Vaivat ja oireet', 'Masentuineisuus',
      'Ahdistuneisuus', 'Energisyys', 'Sukupuolielämä'])
    .range([0, 2000]);

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const element = this.chartContainer.nativeElement;

    const svg = d3.select(element)
      .append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', 300);


    const lineGenerator = d3.line();

    lineGenerator.x((d, i) => {
      return this.xScale(i);
    });

    const pathData = lineGenerator([
      [0, 100],
      [100, 80],
      [200, 30],
      [300, 50],
      [400, 40],
      [500, 80]
    ]);

    const path = svg.append('path');
    path.attr('d', pathData).style('fill', 'none').style('stroke', '#999');


    const xAxis = d3.axisBottom(this.x2Scale);
    xAxis.scale(this.x2Scale);
    svg.append('g').call(xAxis);

  }
}
