import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBank } from './my-bank';

describe('MyBank', () => {
  let component: MyBank;
  let fixture: ComponentFixture<MyBank>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyBank]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBank);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
