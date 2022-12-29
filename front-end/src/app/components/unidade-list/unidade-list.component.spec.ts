import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UnidadeService } from 'src/app/service/unidade.service';
import { BarraComandosComponent } from '../barra-comandos/barra-comandos.component';

import { UnidadeListComponent } from './unidade-list.component';

describe('UnidadeListComponent', () => {
  let component: UnidadeListComponent;
  let fixture: ComponentFixture<UnidadeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule ],
      providers: [ UnidadeService ],
      declarations: [ UnidadeListComponent, BarraComandosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
