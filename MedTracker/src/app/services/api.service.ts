import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from
'@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' :'*'
    //'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    })
    }
  // Se establece la base url del API a consumir
  apiURL = 'https://my-json-server.typicode.com/ChaserHati/MedTracker';
 // Se declara la variable http de tipo HttpClient
  constructor(private http:HttpClient) { }
  //GET 
  getResultados():Observable<any>{ 
    return this.http.get(this.apiURL+'/resultados/').pipe(retry(3));
  }
  //GET Filtrado
  getExamen(name:any):Observable<any>{
    return this.http.get(this.apiURL+'/examen?name='+name).pipe(retry(3));
  }
  //POST
  createExamen(examen:any):Observable<any>{ 
    return this.http.post(this.apiURL+'/examen/',examen,this.httpOptions).pipe(retry(3));
  }
  // PUT
  updateExamen(name:any,post:any):Observable<any>{ 
    return this.http.put(this.apiURL+'/'+name,post,this.httpOptions).pipe(retry(3)); 
  }
  //DELETE
  deleteExamen(name:any):Observable<any>{ 
    return this.http.delete(this.apiURL+'/'+name,this.httpOptions);
  }
}
