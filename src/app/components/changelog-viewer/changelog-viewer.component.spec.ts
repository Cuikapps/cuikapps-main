import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangelogViewerComponent } from './changelog-viewer.component';

describe('ChangelogViewerComponent', () => {
  let component: ChangelogViewerComponent;
  let fixture: ComponentFixture<ChangelogViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangelogViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangelogViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
