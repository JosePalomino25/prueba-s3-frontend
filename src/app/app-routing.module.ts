import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosListComponent } from "./productos-module/productos-list/productos-list.component";
import {RouterModule, Routes} from "@angular/router";

const routes : Routes = [
  {path: 'productos', component: ProductosListComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }

