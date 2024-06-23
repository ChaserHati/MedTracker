import { Injectable } from '@angular/core';

import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Hemograma } from '../class/hemograma';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  public database!: SQLiteObject;

  tablaHemograma: string = "CREATE TABLE IF NOT EXISTS hemograma(fecha TEXT PRIMARY KEY  NOT NULL, vcm NUMBER);";
  registro: string = "INSERT OR IGNORE INTO hemograma (fecha, vcm) VALUES ('2024-01-09', 78.2), ('2023-05-20', 77.9), ('2023-03-18', 77.6), ('2021-01-02', 76.7), ('2019-08-20', 78.6), ('2019-04-06', 79.6), ('2019-01-04', 79.2);";
  listaHemograma = new BehaviorSubject([]);
  
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private sqlite: SQLite, private platform: Platform) {
      this.crearBD();
  }
  
  addHemograma(fecha:any,vcm:any){
      let data=[fecha,vcm];
      return this.database.executeSql('INSERT INTO hemograma(fecha, vcm) VALUES(?,?)',data).then(res =>{
        this.buscarHemograma();
      })
  }
  updateHemograma(vcm:any,fecha:any){
      let data = [vcm, fecha];
      return this.database.executeSql('UPDATE hemograma SET vcm = ? WHERE fecha = ?', data)
      .then(data2 =>{
        this.buscarHemograma();
      })
  }
  deleteHemograma(fecha:any){
    return this.database.executeSql('DELETE FROM hemograma WHERE fecha = ?', [fecha]).then(a =>{
      this.buscarHemograma();
    })
  }
  
  dbState() {
    return this.isDbReady.asObservable();
  }
  
  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'medtracker.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        console.log("BD Creada");
          //llamamos a la creación de tablas
        this.crearTablas();
      }).catch(e => console.log(e));
    })
    }
  
  async crearTablas() {
    try {
      await this.database.executeSql(this.tablaHemograma, []);
      await this.database.executeSql(this.registro, []);
      console.log("Tabla Creada");
      this.buscarHemograma();
      this.isDbReady.next(true);
    } catch (e) {
      console.log("error creartabla " + e);
    }
  }
  
  buscarHemograma() {
    //this.presentAlert("a");
    return this.database.executeSql('SELECT * FROM hemograma ORDER BY 1', []).then(res => {
      let items: Hemograma[] = [];
      //this.presentAlert("b");
      if (res.rows.length > 0) {
        //this.presentAlert("c");
        for (var i = 0; i < res.rows.length; i++) {
          //this.presentAlert("d");
          items.push({
            fecha: res.rows.item(i).fecha,
            vcm: res.rows.item(i).vcm
          });
        }
      }
      //this.presentAlert("d");
      this.listaHemograma.next(items as any);
  });
  }
  
  fetchHemograma(): Observable<Hemograma[]> {
    return this.listaHemograma.asObservable();
  }
}
