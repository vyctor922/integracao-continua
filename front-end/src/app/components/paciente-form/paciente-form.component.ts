import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/model/paciente';
import { AlertaService } from 'src/app/service/alerta.service';
import { PacienteService } from 'src/app/service/paciente.service';
import { IForm } from '../i-form';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styles: [
  ]
})
export class PacienteFormComponent implements OnInit, IForm<Paciente> {

  constructor(
      private servico: PacienteService,
      private servicoAlerta: AlertaService,
      private router: Router,
      private route: ActivatedRoute) { }

  registro: Paciente = <Paciente>{};
  
  submit(form: NgForm): void {

    if (this.registro.id) {
      this.servico.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/pacientes']);
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
        next: (resposta: Paciente) => {
          this.registro = resposta;
        }
      });
    }

  }  

}
