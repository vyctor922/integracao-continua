import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ProfissionalService } from 'src/app/service/profissional.service';
import { BarraComandosComponent } from '../barra-comandos/barra-comandos.component';

import { ProfissionalListComponent } from './profissional-list.component';

describe('ProfissionalListComponent', () => {
  let component: ProfissionalListComponent;
  let fixture: ComponentFixture<ProfissionalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule ],
      providers: [ ProfissionalService ],
      declarations: [ ProfissionalListComponent, BarraComandosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
