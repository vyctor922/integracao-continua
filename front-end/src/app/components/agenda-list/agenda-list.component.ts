import { Component, OnInit } from '@angular/core';
import { Atendimento } from 'src/app/model/atendimento';
import { AtendimentoService } from 'src/app/service/atendimento.service';
import { IList } from '../i-list';

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda-list.component.html',
  styles: [
  ]
})
export class AgendaListComponent implements OnInit, IList<Atendimento> {

  constructor(
    private servico: AtendimentoService
  ) { }

  registros: Atendimento[] = Array<Atendimento>();
  status: string[] = ['AGENDADO', 'CONFIRMADO'];

  get(termoBusca?: string | undefined): void {
    this.servico.getByStatus(this.status, termoBusca).subscribe({
      next: (resposta: Atendimento[]) => {
        this.registros = resposta.sort(
          (a, b) => a.data.localeCompare(b.data)
        );
      }
    })
  }

  delete(id: number): void {
    if (confirm('Deseja realmente cancelar o agendamento?')) {
      this.servico.delete(id).subscribe({
        complete: () => {
          this.get();
        }
      })
    }
  }

  updateStatus(id: number): void {
    if (confirm('Confirma alteração no status do agendamento?')) {
      this.servico.updateStatus(id).subscribe({
        complete: () => {
          this.get();
        }
      });
    }
  }

  ngOnInit(): void {
    this.get();
  }

}
