import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Especialidade } from 'src/app/model/especialidade';
import { Profissional } from 'src/app/model/profissional';
import { Unidade } from 'src/app/model/unidade';
import { AlertaService } from 'src/app/service/alerta.service';
import { EspecialidadeService } from 'src/app/service/especialidade.service';
import { ProfissionalService } from 'src/app/service/profissional.service';
import { UnidadeService } from 'src/app/service/unidade.service';
import { Utils } from 'src/app/utils/utils';
import { IForm } from '../i-form';

@Component({
  selector: 'app-profissional-form',
  templateUrl: './profissional-form.component.html',
  styles: [
  ]
})
export class ProfissionalFormComponent implements OnInit, IForm<Profissional> {

  constructor(
      private servico: ProfissionalService,
      private servicoAlerta: AlertaService,
      private servicoEspecialidade: EspecialidadeService,
      private servicoUnidade: UnidadeService,
      private router: Router,
      private route: ActivatedRoute) { }

  registro: Profissional = <Profissional>{};
  especialidades: Especialidade[] = Array<Especialidade>();
  unidades: Unidade[] = Array<Unidade>();
  compareById = Utils.compareById;
  
  submit(form: NgForm): void {
    if (this.registro.id) {
      this.servico.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/profissionais']);
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

    this.servicoEspecialidade.get().subscribe({
      next: (resposta: Especialidade[]) => {
        this.especialidades = resposta;
      }
    });

    this.servicoUnidade.get().subscribe({
      next: (resposta: Unidade[]) => {
        this.unidades = resposta;
      }
    });

    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) {
      this.servico.getById(+id).subscribe({
        next: (resposta: Profissional) => {
          this.registro = resposta;
        }
      });
    }

  }  

}
