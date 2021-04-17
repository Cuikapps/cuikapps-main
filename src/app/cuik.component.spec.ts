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

  it('should create the cuik', () => {
    const fixture = TestBed.createComponent(CuikComponent);
    const cuik = fixture.componentInstance;
    expect(cuik).toBeTruthy();
  });

  it(`should have as title 'cuikapps-main'`, () => {
    const fixture = TestBed.createComponent(CuikComponent);
    const cuik = fixture.componentInstance;
    expect(cuik.title).toEqual('cuikapps-main');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CuikComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'cuikapps-main cuik is running!'
    );
  });
});
