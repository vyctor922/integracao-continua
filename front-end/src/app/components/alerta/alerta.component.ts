import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Alerta } from 'src/app/model/alerta';
import { ETipoAlerta } from 'src/app/model/e-tipo-alerta';
import { AlertaService } from 'src/app/service/alerta.service';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: [
  ]
})
export class AlertaComponent implements OnInit {

  constructor(
    private servico: AlertaService,
    private router: Router
  ) { }

  exibeAlerta(alerta: Alerta): void {
    const elementoAlerta = document.querySelector<HTMLElement>('div.alerta');
    const elementoAlertaMensagem = document.querySelector<HTMLElement>('div.alerta span#mensagem');
    if (elementoAlerta && elementoAlertaMensagem) {
      elementoAlertaMensagem.innerText = alerta.mensagem;
      elementoAlerta.classList.add(alerta.tipo);
      elementoAlerta.classList.remove('inativo');
    }
  }
  
  fechaAlerta(): void {
    const elementoAlerta = document.querySelector<HTMLElement>('div.alerta');
    if (elementoAlerta) {
      elementoAlerta.classList.add('inativo');
      elementoAlerta.classList.remove(
        ETipoAlerta.SUCESSO,
        ETipoAlerta.ERRO
      );
    }
  }

  ngOnInit(): void {

    this.servico.receberAlerta().subscribe(
      (alerta) => {
        this.exibeAlerta(alerta);
      }
    );

    this.router.events.subscribe(
      (evento) => {
        if (evento instanceof NavigationStart) {
          this.fechaAlerta();
        }
      }
    );
    
  }

}
