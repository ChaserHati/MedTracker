import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  fechaNew!: string;
  vcmNew!: number;

  constructor(private activerouter: ActivatedRoute, private router: Router) {
    this.activerouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras?.state){
        this.fechaNew = this.router.getCurrentNavigation()?.extras?.state?.['fechaNew'];
        this.vcmNew = this.router.getCurrentNavigation()?.extras?.state?.['vcmNew'];
        this.fechas.push(this.fechaNew);
        this.valores.push(this.vcmNew);
      }
    }

    )
   }

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
            data: this.valores,
            borderColor: "blue",
          },
          {
            label: 'Rango Mínimo Saludable',
            data: Array.from(this.valores).fill(80),
            borderColor: "red"
          },
          {
            label: 'Rango Máximo Saludable',
            data: Array.from(this.valores).fill(100),
            borderColor: "red"
          }
        ]
      }
    });
  }
}
