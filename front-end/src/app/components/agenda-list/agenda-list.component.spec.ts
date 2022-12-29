import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AtendimentoService } from 'src/app/service/atendimento.service';
import { BarraComandosComponent } from '../barra-comandos/barra-comandos.component';

import { AgendaListComponent } from './agenda-list.component';

describe('AgendaListComponent', () => {
  let component: AgendaListComponent;
  let fixture: ComponentFixture<AgendaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule ],
      providers: [ AtendimentoService ],
      declarations: [ AgendaListComponent, BarraComandosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
