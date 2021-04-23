import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuikconvertorComponent } from './cuikconvertor.component';

describe('CuikconvertorComponent', () => {
  let component: CuikconvertorComponent;
  let fixture: ComponentFixture<CuikconvertorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuikconvertorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuikconvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
