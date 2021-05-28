import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/services/auth.service';

import { ForgotPasswordComponent } from './forgot-password.component';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  let testBedAuth: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgotPasswordComponent],
      providers: [AuthService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    testBedAuth = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should inject services', inject([AuthService], (auth: AuthService) => {
    expect(auth).toBe(testBedAuth);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
