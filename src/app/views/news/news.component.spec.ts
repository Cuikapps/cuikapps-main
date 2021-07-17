import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToRoutePipe } from 'src/app/pipes/to-route.pipe';

import { NewsComponent } from './news.component';

describe('NewsComponent', (): void => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsComponent, ToRoutePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#titles should be an array of 4', () => {
    expect(component.titles).toHaveSize(4);
  });

  it('#screenWidth should return a number', () => {
    expect(typeof component.screenWidth === 'number').toBe(true);
  });
});
