import { Component, OnInit, Input } from '@angular/core';
import {Producto} from "../producto-interface";

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.scss']
})
export class ProductoCardComponent implements OnInit {

 @Input() productos!:Producto[];

  constructor() { }

  ngOnInit(): void {
  }

}
