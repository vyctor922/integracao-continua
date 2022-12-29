import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Convenio } from 'src/app/model/convenio';
import { AlertaService } from 'src/app/service/alerta.service';
import { ConvenioService } from 'src/app/service/convenio.service';
import { IForm } from '../i-form';

@Component({
  selector: 'app-convenio-form',
  templateUrl: './convenio-form.component.html',
  styles: [
  ]
})
export class ConvenioFormComponent implements OnInit, IForm<Convenio> {

  constructor(
      private servico: ConvenioService,
      private servicoAlerta: AlertaService,
      private router: Router,
      private route: ActivatedRoute) { }

  registro: Convenio = <Convenio>{};
  
  submit(form: NgForm): void {
    if (this.registro.id) {
      this.servico.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/convenios']);
          this.servicoAlerta.enviarAlertaSucesso();
        }
      });
    } else {
      this.servico.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          this.servicoAlerta.enviarAlertaSucesso();
        }
      });
    }
  }

  ngOnInit(): void {

    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) {
      this.servico.getById(+id).subscribe({
        next: (resposta: Convenio) => {
          this.registro = resposta;
        }
      });
    }

  }  

}
