import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarLoan } from './car-loan';

describe('CarLoan', () => {
  let component: CarLoan;
  let fixture: ComponentFixture<CarLoan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarLoan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarLoan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
