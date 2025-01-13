import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductosListComponent} from "./productos-list/productos-list.component";
import { ProductoCardComponent} from "../producto-card/producto-card.component";
import {MatCardModule} from "@angular/material/card";
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [ProductosListComponent, ProductoCardComponent],
  imports: [CommonModule, MatCardModule, RouterOutlet],
  exports: [ProductosListComponent, ProductoCardComponent]
})
export class ProductosModule {}
