import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPresetComponent } from './nav-preset.component';

describe('NavPresetComponent', () => {
  let component: NavPresetComponent;
  let fixture: ComponentFixture<NavPresetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavPresetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
