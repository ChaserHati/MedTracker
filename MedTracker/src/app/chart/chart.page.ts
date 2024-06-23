import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Chart } from 'chart.js/auto';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit {
  @ViewChild('lineCanvas') lineCanvas!: ElementRef;

  arregloHemograma: any = [{
    fecha: '',
    vcm: 0
  }]

  private lineChart!: Chart;

  fechas: string[] = [];
  
  valores: number[] = [];

  min: number[] = [];

  max: number[] = [];

  constructor(private activerouter: ActivatedRoute, private router: Router, private apiService: APIService) { }

  ngOnInit() {
  }

//
  llenarFechas(){
  }

  llenarValores(){
  }

  llenarMin(){
  }

  llenarMax(){
  }

  llenar(){
  }
//
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
            data: this.min,
            borderColor: "red"
          },
          {
            label: 'Rango Máximo Saludable',
            data: this.max,
            borderColor: "red"
          }
        ]
      }
    });
  }
}
