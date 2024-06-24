import { Component, AfterViewInit, ElementRef, ViewChild, OnInit, OnChanges, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Chart } from 'chart.js/auto';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements AfterViewInit {
  //chart
  @ViewChild('lineCanvas') lineCanvas!: ElementRef;
  private lineChart!: Chart;
  fechas: string [] = [];
  valores: number[] = [];
  min: number [] = [];
  max: number [] = [];
  examenMin!: number;
  examenMax!: number;
  //API
  examen: any = {
    name: "",
    min: 0,
    max: 0
  }
  resultados: any[] = [];
  resultado: any = {
    fecha: "",
    valor: 0
  }

  constructor(private activerouter: ActivatedRoute, private router: Router, private apiService: APIService) { }
  //lifecycles
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getExamen("vcm");
    this.getResultados();
    this.lineChartMethod();
  }
  ngAfterViewInit() {
    this.lineChartMethod();
  }
  //API Methods
  getExamen(name:any){
    this.apiService.getExamen(name).subscribe((data)=>{
      this.examen=data;
      data.forEach((element: { min: number; max: number; }) => {
        this.examenMin = element.min;
        this.examenMax = element.max;
      });
    })
  }
  getResultados(){
    this.apiService.getResultados().subscribe((data)=>{
      this.resultados=data;
      data.forEach((element: {valor: number; fecha: string;}) => {
        this.fechas.push(element.fecha)
        this.valores.push(element.valor)
        this.min.push(this.examenMin)
        this.max.push(this.examenMax)
      });
      console.log(data)
    })
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
