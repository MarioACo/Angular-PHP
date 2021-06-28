import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  url='https://localhost/angular/';

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  alta(articulo:any){
    return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo));
  }

  /*alta(articulo:any) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo));    
  }*/

  baja(codigo:any) {
    return this.http.get(`${this.url}baja.php?codigo=${codigo}`);
  }
  
  seleccionar(codigo:any) {
    return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
  }

  modificacion(articulo:any) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulo));    
  } 
}