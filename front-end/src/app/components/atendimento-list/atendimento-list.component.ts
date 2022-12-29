import { Component, OnInit } from '@angular/core';
import { Atendimento } from 'src/app/model/atendimento';
import { AtendimentoService } from 'src/app/service/atendimento.service';
import { IList } from '../i-list';

@Component({
  selector: 'app-atendimento-list',
  templateUrl: './atendimento-list.component.html',
  styles: [
  ]
})
export class AtendimentoListComponent implements OnInit, IList<Atendimento> {

  constructor(
    private servico: AtendimentoService
  ) { }

  registros: Atendimento[] = Array<Atendimento>();
  status: string[] = ['CHEGADA', 'ATENDIMENTO'];

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
    throw new Error('Method not implemented.');
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
