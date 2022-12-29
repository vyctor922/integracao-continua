import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EspecialidadeService } from 'src/app/service/especialidade.service';

import { AgendaFormComponent } from './agenda-form.component';

describe('AgendaFormComponent', () => {
  let component: AgendaFormComponent;
  let fixture: ComponentFixture<AgendaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [EspecialidadeService],
      declarations: [ AgendaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
