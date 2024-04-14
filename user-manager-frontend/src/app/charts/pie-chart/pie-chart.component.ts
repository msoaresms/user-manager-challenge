import { Component, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent {
  @Input() chartId = '';
  @Input() data: any[] = [];
  private svg: any;
  private margin = 50;
  private width = 750;
  private height = 500;
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors: any;

  ngAfterViewInit(): void {
    this.createSvg();
    this.createColors();
    this.drawChart();
  }

  private createSvg() {
    this.svg = d3
      .select(`figure#${this.chartId}`)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '40vh')
      .append('g')
      .attr('transform', `translate(${this.width / 3.25}, ${this.height / 2})`);
  }

  private createColors(): void {
    this.colors = d3.scaleOrdinal(d3.schemeCategory10);
  }

  private drawChart(): void {
    // Compute the position of each group on the pie:
    const pie = d3
      .pie<any>()
      .startAngle(-0.5 * Math.PI)
      .endAngle(0.5 * Math.PI)
      .sort(null)
      .value((d: any) => Number(d.number));

    // Build the pie chart
    this.svg
      .selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('path')
      .attr('d', d3.arc().innerRadius(125).outerRadius(this.radius))
      .attr('fill', (d: any, i: any) => this.colors(i));

    // Add labels
    const labelLocation = d3.arc().innerRadius(100).outerRadius(this.radius);

    this.svg
      .selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('text')
      .text((d: any) => d.data.status)
      .attr(
        'transform',
        (d: any) => 'translate(' + labelLocation.centroid(d) + ')'
      )
      .style('text-anchor', 'middle')
      .style('font-size', 15);
  }
}
