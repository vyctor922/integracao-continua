import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PacienteService } from 'src/app/service/paciente.service';
import { BarraComandosComponent } from '../barra-comandos/barra-comandos.component';

import { PacienteListComponent } from './paciente-list.component';

describe('PacienteListComponent', () => {
  let component: PacienteListComponent;
  let fixture: ComponentFixture<PacienteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule ],
      providers: [ PacienteService ],
      declarations: [ PacienteListComponent, BarraComandosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
