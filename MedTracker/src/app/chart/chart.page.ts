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
  //chart
  @ViewChild('lineCanvas') lineCanvas!: ElementRef;
  private lineChart!: Chart;
  fechas: string [] = [];
  valores: number[] = [];
  min: number [] = [];
  max: number [] = [];
  //API
  examen: any = {
    name: "",
    min: 0,
    max: 0
  }
  resultados: any;

  constructor(private activerouter: ActivatedRoute, private router: Router, private apiService: APIService) { }
  //lifecycles
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getExamen("vcm");
    this.getResultados();
  }
  //API Methods
  getExamen(name:any){
    this.apiService.getExamen(name).subscribe((data)=>{
      this.examen=data;
    })
  }
  getResultados(){
    this.apiService.getResultados().subscribe((data)=>{
      this.resultados=data;
      console.log(data)
    })
  }

//
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
