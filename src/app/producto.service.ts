import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Producto} from "./producto-interface";

@Injectable({
  providedIn: 'root',
})
export class ProductoService {

  private url='https://fakestoreapi.com/products'

  constructor(private http: HttpClient) {
  }
  //Esta es del punto 5
 /* obtenerProductos() {
    return [
      { nombre: 'Producto A', precio: 30 },
      { nombre: 'Producto B', precio: 120 },
    ];
  }*/

  //Punto 6
  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url)
  }
}
