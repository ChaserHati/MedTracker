import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.page.html',
  styleUrls: ['./dataentry.page.scss'],
})
export class DataentryPage implements OnInit {
  public fecha!: string;
  fechaFormateada!: string;
  valueVCM!: number;

  tipoExamen!: string;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }
  processFecha(){
    this.fechaFormateada = this.fecha.split('T')[0];
  }
  guardarDatos(){
  }
}
