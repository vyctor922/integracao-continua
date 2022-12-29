import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-barra-comandos',
  templateUrl: './barra-comandos.component.html',
  styles: [
  ]
})
export class BarraComandosComponent implements OnInit {

  constructor() { }

  @Output() eventoBusca = new EventEmitter();

  busca(termoBusca: string) {
    this.eventoBusca.emit(termoBusca);
  }

  ngOnInit(): void {
  }

}
