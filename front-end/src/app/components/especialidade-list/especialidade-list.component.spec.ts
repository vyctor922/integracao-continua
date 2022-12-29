import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EspecialidadeService } from 'src/app/service/especialidade.service';
import { BarraComandosComponent } from '../barra-comandos/barra-comandos.component';

import { EspecialidadeListComponent } from './especialidade-list.component';

describe('EspecialidadeListComponent', () => {
  let component: EspecialidadeListComponent;
  let fixture: ComponentFixture<EspecialidadeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule ],
      providers: [ EspecialidadeService ],
      declarations: [ EspecialidadeListComponent, BarraComandosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
