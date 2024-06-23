import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Chart } from 'chart.js/auto';
import { DBService } from '../services/db.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas: ElementRef | any;

  arregloHemograma: any = [{
    fecha: '',
    vcm: 0
  }]

  lineChart: any;

  fechas: string[] = [];
  
  valores: number[] = [];

  min: number[] = [];

  max: number[] = [];

  constructor(private activerouter: ActivatedRoute, private router: Router, private dbService:DBService) { }

  ngOnInit() {
    this.dbService.dbState().subscribe((res)=>{
      if (res){
        this.dbService.fetchHemograma().subscribe(item=>{
          this.arregloHemograma = item;
          this.llenar();
        })
      }
    });
    this.lineChartMethod();
  }

  ngAfterViewInit() {
    this.lineChartMethod();
  }
//
  llenarFechas(){
    for(let x of this.arregloHemograma){
      this.fechas.push(x.fecha)
    }
    return true;
  }

  llenarValores(){
    for(let x of this.arregloHemograma){
      this.valores.push(x.vcm)
    }
    return true;
  }

  llenarMin(){
    this.min = Array.from(this.valores).fill(80);
    return true;
  }

  llenarMax(){
    this.max = Array.from(this.valores).fill(100);
    return true;
  }

  llenar(){
    if(this.llenarFechas()){
      if(this.llenarValores()){
        if(this.llenarMin()){
          if(this.llenarMax()){

          }
        }
      }
    }
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
