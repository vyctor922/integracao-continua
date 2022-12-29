import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ConvenioService } from 'src/app/service/convenio.service';

import { ConvenioFormComponent } from './convenio-form.component';

describe('ConvenioFormComponent', () => {
  let component: ConvenioFormComponent;
  let fixture: ComponentFixture<ConvenioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [ConvenioService],
      declarations: [ ConvenioFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvenioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
