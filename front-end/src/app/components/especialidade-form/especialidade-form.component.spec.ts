import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EspecialidadeService } from 'src/app/service/especialidade.service';

import { EspecialidadeFormComponent } from './especialidade-form.component';

describe('EspecialidadeFormComponent', () => {
  let component: EspecialidadeFormComponent;
  let fixture: ComponentFixture<EspecialidadeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [EspecialidadeService],
      declarations: [ EspecialidadeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
