import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CuikComponent } from './cuik.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CuikComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CuikComponent);
    const cuik = fixture.componentInstance;
    expect(cuik).toBeTruthy();
  });

  it(`should have as title 'cuikapps-main'`, () => {
    const fixture = TestBed.createComponent(CuikComponent);
    const cuik = fixture.componentInstance;
    expect(cuik.title).toEqual('cuikapps-main');
  });
});
