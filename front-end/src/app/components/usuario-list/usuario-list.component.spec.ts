import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';
import { BarraComandosComponent } from '../barra-comandos/barra-comandos.component';

import { UsuarioListComponent } from './usuario-list.component';

describe('UsuarioComponent', () => {
  let component: UsuarioListComponent;
  let fixture: ComponentFixture<UsuarioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule ],
      providers: [ UsuarioService ],
      declarations: [ UsuarioListComponent, BarraComandosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
