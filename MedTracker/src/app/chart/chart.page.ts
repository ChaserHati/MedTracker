import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';

import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements AfterViewInit {
  @ViewChild('lineCanvas') private lineCanvas: ElementRef | any;

  lineChart: any;

  fechas: string[] = ['2019-01-04','2019-04-06','2019-08-20','2021-02-01','2023-03-18','2023-05-20','2024-01-09',];
  
  valores: number[] = [79.2,78.6,79.6,76.7,78.2, 77.9, 77.6];

  constructor() { }

  ngAfterViewInit() {
    this.lineChartMethod();
  }
  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.fechas,
        datasets: [
          {
            label: 'VCM',
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.valores,
            spanGaps: false,
          }
        ]
      }
    });
  }
}
