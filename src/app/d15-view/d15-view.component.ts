import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as d3 from 'd3';
import { line } from 'd3';


type myData = {
  name: string,
  value: number
};

@Component({
  selector: 'app-d15-view',
  templateUrl: './d15-view.component.html',
  styleUrls: ['./d15-view.component.css']
})
export class D15ViewComponent implements OnInit, AfterViewInit {

  @ViewChild('chart') private chartContainer: ElementRef;

  data: myData[] = [];

  yScale = d3.scaleLinear().domain([1, 0]).range([0, 200]);

  x2Scale = d3.scaleBand()
    .domain(['Liikuntakyky', 'Näkö', 'Kuulo', 'Hengitys', 'Nukkuminen', 'Syöminen', 'Puhe', 'Eritys',
      'Tavanomaiset toiminnot', 'Henkinen toiminta', 'Vaivat ja oireet', 'Masentuineisuus',
      'Ahdistuneisuus', 'Energisyys', 'Sukupuolielämä'])
    .range([0, 800]);

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.data.push({ name: 'Liikuntakyky', value: 0.8 });
    this.data.push({ name: 'Näkö', value: 0.7 });
    this.data.push({ name: 'Kuulo', value: 0.3 });
    this.data.push({ name: 'Hengitys', value: 0.5 });
    this.data.push({ name: 'Nukkuminen', value: 0.4 });
    this.data.push({ name: 'Syöminen', value: 0.8 });
    this.data.push({ name: 'Puhe', value: 1.00 });
    this.data.push({ name: 'Eritys', value: 0.8 });
    this.data.push({ name: 'Tavanomaiset toiminnot', value: 0.3 });
    this.data.push({ name: 'Henkinen toiminta', value: 0.5 });
    this.data.push({ name: 'Vaivat ja oireet', value: 0.4 });
    this.data.push({ name: 'Masentuineisuus', value: 0.8 });
    this.data.push({ name: 'Ahdistuneisuus', value: 0.5 });
    this.data.push({ name: 'Energisyys', value: 0.4 });
    this.data.push({ name: 'Sukupuolielämä', value: 0.8 });
  }

  ngAfterViewInit(): void {
    const element = this.chartContainer.nativeElement;

    const svg = d3.select(element)
      .append('svg')
      .attr('width', element.offsetWidth / 2)
      .attr('height', 300);


    const lineGenerator = d3.line<myData>();

    lineGenerator.x((d, i) => {
      return this.x2Scale(d.name);
    });

    lineGenerator.y((d, i) => {
      return this.yScale(d.value);
    });

    const pathData = lineGenerator(this.data);

    const path = svg.append('path');
    path.attr('d', pathData).style('fill', 'none').style('stroke', '#999').attr('transform', 'translate(65,0)');


    const xAxis = d3.axisBottom(this.x2Scale);
    svg.append('g').call(xAxis).attr('transform', 'translate(0, 220)').selectAll('text').attr('transform', 'rotate(-45)')
      .style("text-anchor", "end");

    const yAxis = d3.axisLeft(this.yScale);
    svg.append('g').call(yAxis).attr('transform', 'translate(30, 0)');

  }
}
