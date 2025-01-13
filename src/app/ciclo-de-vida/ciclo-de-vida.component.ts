import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.scss']
})
export class CicloDeVidaComponent implements OnInit, OnDestroy, OnChanges {

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit cicloDeVidaComponent');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Componente destruido');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges cicloDeVidaComponent', changes);
  }
}
