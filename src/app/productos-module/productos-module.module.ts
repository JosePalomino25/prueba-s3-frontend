import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductosListComponent} from "./productos-list/productos-list.component";
import { ProductoCardComponent} from "../producto-card/producto-card.component";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [ProductosListComponent, ProductoCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [ProductosListComponent, ProductoCardComponent]
})
export class ProductosModule {}
