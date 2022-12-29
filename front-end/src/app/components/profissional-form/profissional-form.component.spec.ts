import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfissionalService } from 'src/app/service/profissional.service';

import { ProfissionalFormComponent } from './profissional-form.component';

describe('ProfissionalFormComponent', () => {
  let component: ProfissionalFormComponent;
  let fixture: ComponentFixture<ProfissionalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [ProfissionalService],
      declarations: [ ProfissionalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
