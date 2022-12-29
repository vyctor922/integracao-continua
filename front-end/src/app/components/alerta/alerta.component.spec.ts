import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AlertaComponent } from './alerta.component';

describe('AlertaComponent', () => {
  let component: AlertaComponent;
  let fixture: ComponentFixture<AlertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ AlertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
