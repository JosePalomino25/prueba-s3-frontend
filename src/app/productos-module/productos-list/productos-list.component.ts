import {Component, Input, OnInit} from '@angular/core';
import {ProductoService} from "../../producto.service";
import {Producto} from "../../producto-interface";

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
})
export class ProductosListComponent implements OnInit {


  productos!: Producto[];
  error: string | null = null;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe((productos: Producto[]) => this.productos = productos);
  }
}
