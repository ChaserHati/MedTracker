import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.page.html',
  styleUrls: ['./dataentry.page.scss'],
})
export class DataentryPage implements OnInit {
  public fecha!: string;
  fechaFormateada!: string;
  constructor() { }

  ngOnInit() {
  }
  processFecha(){
    this.fechaFormateada = this.fecha.split('T')[0];
  }
}
