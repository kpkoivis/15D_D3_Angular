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

  data1: myData[] = [];
  data2: myData[] = [];
  data3: myData[] = [];
  width: number;
  height: number;

  yScale = d3.scaleLinear().domain([1, 0]).range([0, 200]);

  xScale = d3.scaleBand()
    .domain(['Liikuntakyky', 'Näkö', 'Kuulo', 'Hengitys', 'Nukkuminen', 'Syöminen', 'Puhe', 'Eritys',
      'Tavanomaiset toiminnot', 'Henkinen toiminta', 'Vaivat ja oireet', 'Masentuineisuus',
      'Ahdistuneisuus', 'Energisyys', 'Sukupuolielämä'])
    .range([0, 800]);

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.data1.push({ name: 'Liikuntakyky', value: 0.8 });
    this.data1.push({ name: 'Näkö', value: 0.7 });
    this.data1.push({ name: 'Kuulo', value: 0.3 });
    this.data1.push({ name: 'Hengitys', value: 0.5 });
    this.data1.push({ name: 'Nukkuminen', value: 0.4 });
    this.data1.push({ name: 'Syöminen', value: 0.8 });
    this.data1.push({ name: 'Puhe', value: 1.00 });
    this.data1.push({ name: 'Eritys', value: 0.8 });
    this.data1.push({ name: 'Tavanomaiset toiminnot', value: 0.3 });
    this.data1.push({ name: 'Henkinen toiminta', value: 0.5 });
    this.data1.push({ name: 'Vaivat ja oireet', value: 0.4 });
    this.data1.push({ name: 'Masentuineisuus', value: 0.8 });
    this.data1.push({ name: 'Ahdistuneisuus', value: 0.5 });
    this.data1.push({ name: 'Energisyys', value: 0.4 });
    this.data1.push({ name: 'Sukupuolielämä', value: 0.8 });

    this.data2.push({ name: 'Liikuntakyky', value: 0.7 });
    this.data2.push({ name: 'Näkö', value: 0.5 });
    this.data2.push({ name: 'Kuulo', value: 0.5 });
    this.data2.push({ name: 'Hengitys', value: 0.6 });
    this.data2.push({ name: 'Nukkuminen', value: 0.5 });
    this.data2.push({ name: 'Syöminen', value: 0.4 });
    this.data2.push({ name: 'Puhe', value: 1.00 });
    this.data2.push({ name: 'Eritys', value: 0.7 });
    this.data2.push({ name: 'Tavanomaiset toiminnot', value: 0.5 });
    this.data2.push({ name: 'Henkinen toiminta', value: 0.6 });
    this.data2.push({ name: 'Vaivat ja oireet', value: 0.5 });
    this.data2.push({ name: 'Masentuineisuus', value: 0.7 });
    this.data2.push({ name: 'Ahdistuneisuus', value: 0.6 });
    this.data2.push({ name: 'Energisyys', value: 0.6 });
    this.data2.push({ name: 'Sukupuolielämä', value: 0.7 });

    this.data3.push({ name: 'Liikuntakyky', value: 0.8 });
    this.data3.push({ name: 'Näkö', value: 0.6 });
    this.data3.push({ name: 'Kuulo', value: 0.2 });
    this.data3.push({ name: 'Hengitys', value: 0.8 });
    this.data3.push({ name: 'Nukkuminen', value: 0.6 });
    this.data3.push({ name: 'Syöminen', value: 0.5 });
    this.data3.push({ name: 'Puhe', value: 0.9 });
    this.data3.push({ name: 'Eritys', value: 0.8 });
    this.data3.push({ name: 'Tavanomaiset toiminnot', value: 0.4 });
    this.data3.push({ name: 'Henkinen toiminta', value: 0.5 });
    this.data3.push({ name: 'Vaivat ja oireet', value: 0.4 });
    this.data3.push({ name: 'Masentuineisuus', value: 0.6 });
    this.data3.push({ name: 'Ahdistuneisuus', value: 0.7 });
    this.data3.push({ name: 'Energisyys', value: 0.7 });
    this.data3.push({ name: 'Sukupuolielämä', value: 0.8 });
  }

  ngAfterViewInit(): void {
    const element = this.chartContainer.nativeElement;

    this.width = element.offsetWidth / 2;
    this.height = 350;

    const svg = d3.select(element)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height);


    const lineGenerator = d3.line<myData>();

    lineGenerator.x((d, i) => {
      return this.xScale(d.name);
    });

    lineGenerator.y((d, i) => {
      return this.yScale(d.value);
    });




    const xAxis = d3.axisBottom(this.xScale);
    svg.append('g').call(xAxis)
      .attr('transform', 'translate(30, 220)')
      .selectAll('text')
      .attr('transform', 'rotate(-45) translate(-9, -2)')
      .style('text-anchor', 'end');

    const yAxis = d3.axisLeft(this.yScale);
    svg.append('g').call(yAxis)
      .attr('transform', 'translate(30, 20)');


    [0.2, 0.4, 0.6, 0.8, 1.0].forEach(yValue => {
      svg.append('line')
        .attr('x1', 0)
        .attr('y1', this.yScale(yValue))
        .attr('x2', this.width)
        .attr('y2', this.yScale(yValue))
        .style('stroke', 'lightgrey')
        .style('stroke-width', 1)
        .attr('transform', 'translate(30, 21)');
    });

    const pathData1 = lineGenerator(this.data1);

    const path1 = svg.append('path');
    path1.attr('d', pathData1)
      .style('fill', 'none')
      .style('stroke', 'blue')
      .style('stroke-width', 2)
      .attr('transform', 'translate(57,20)');


    const pathData2 = lineGenerator(this.data2);

    const path2 = svg.append('path');
    path2.attr('d', pathData2)
      .style('fill', 'none')
      .style('stroke', 'red')
      .style('stroke-width', 2)
      .attr('transform', 'translate(57,20)');


    const pathData3 = lineGenerator(this.data3);

    const path3 = svg.append('path');
    path3.attr('d', pathData3)
      .style('fill', 'none')
      .style('stroke', 'green')
      .style('stroke-width', 2)
      .attr('transform', 'translate(57,20)');
  }
}
