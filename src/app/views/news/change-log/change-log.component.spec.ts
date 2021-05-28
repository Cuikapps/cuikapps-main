import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { ChangeLogComponent } from './change-log.component';
import { changelogs } from '../../../data/changelogs.json';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ChangeLogComponent', () => {
  let component: ChangeLogComponent;
  let fixture: ComponentFixture<ChangeLogComponent>;
  let testBedActivatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeLogComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (v: string) => {
                return '0';
              },
            }),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLogComponent);
    component = fixture.componentInstance;
    testBedActivatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should inject services', inject(
    [ActivatedRoute],
    (activatedRoute: ActivatedRoute) => {
      expect(activatedRoute).toBe(testBedActivatedRoute);
    }
  ));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#typeChangeLogs should equal the raw json changelog', () => {
    expect(component.typedChangeLogs).toEqual(changelogs);
  });
});
