import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.page.html',
  styleUrls: ['./dataentry.page.scss'],
})
export class DataentryPage implements OnInit {
  public fecha!: string;
  fechaFormateada!: string;
  valueVCM!: number;
  resultado={
    fecha: this.fechaFormateada,
    valor: this.valueVCM
  }

  tipoExamen!: string;
  
  constructor(private router: Router, private api: APIService) { }

  ngOnInit() {
  }
  processFecha(){
    this.fechaFormateada = this.fecha.split('T')[0];
  }
  guardarDatos(){
    this.api.createResultado(this.resultado).subscribe(()=>{
      console.log(this.resultado);
    },
  error=>{
    console.log("Error:"+error)
  })
  }
}
