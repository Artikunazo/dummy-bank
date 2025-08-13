import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mortgages } from './mortgages';

describe('Mortgages', () => {
  let component: Mortgages;
  let fixture: ComponentFixture<Mortgages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mortgages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mortgages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
