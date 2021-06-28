import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  [x: string]: any;

  
  articulos:any=null;
  
  art:any={
    codigo:null,
    descripcion:null,
    precio:null
  }

  constructor(private articulosServicio: ArticulosService) {}

  ngOnInit() {
    this.recuperarTodos();
  }
recuperarTodos() {
    this.articulosServicio.recuperarTodos().subscribe(result => this.articulos = result);
  }

  alta() {
    this.articulosServicio.alta(this.art).subscribe(datos => {
      this.resultado = datos;
      if (this.resultado[0] == 'OK') {
        alert(this.resultado[1]);
        this.recuperarTodos();
      }
    });
  }

  baja(codigo:any) {
    this.articulosServicio.baja(codigo).subscribe(datos => {
      this.resultado = datos;
      if (this.resultado[0] == 'OK') {
        alert(this.resultado[1]);
        this.recuperarTodos();
      }
    });

  }

  modificacion() {
    this.articulosServicio.modificacion(this.art).subscribe(datos => {
      this.resultado = datos;
      if (this.resultado[0] == 'OK') {
        alert(this.resultado[1]);
        this.recuperarTodos();
      }
    });
  }

  seleccionar(codigo:any) {
    this.articulosServicio.seleccionar(codigo).subscribe(result => {
      this.resultado = result;
      this.art.codigo = this.resultado[0].codigo;
      this.art.descripcion = this.resultado[0].descripcion;
      this.art.precio = this.resultado[0].precio;
    });
  }
  hayRegistros() {
    return true;
  } 

}