import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleWhoLikedComponent } from './people-who-liked.component';

describe('PeopleWhoLikedComponent', () => {
  let component: PeopleWhoLikedComponent;
  let fixture: ComponentFixture<PeopleWhoLikedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleWhoLikedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleWhoLikedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
