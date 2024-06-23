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
    'Access-Control-Allow-Origin' :'*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    })
    }
  // Se establece la base url del API a consumir
  apiURL = 'https://jsonplaceholder.typicode.com';
 // Se declara la variable http de tipo HttpClient
  constructor(private http:HttpClient) { }
  //GET
  getPosts():Observable<any>{ 
    return this.http.get(this.apiURL+'/posts/').pipe(retry(3));
  }
  //GET Filtrado
  getPost(id:any):Observable<any>{
    return this.http.get(this.apiURL+'/posts/'+id).pipe(retry(3)); 
  }
//POST
  createPost(post:any):Observable<any>{ 
    return this.http.post(this.apiURL+'/posts',post,this.httpOptions).pipe(retry(3));
  }
  // PUT
  updatePost(id:any,post:any):Observable<any>{ 
    return this.http.put(this.apiURL+'/posts/'+id,post,this.httpOptions).pipe(retry(3)); 
  }
  //DELETE
  deletePost(id:any):Observable<any>{ 
    return this.http.delete(this.apiURL+'/posts/'+id,this.httpOptions);
  }
}
