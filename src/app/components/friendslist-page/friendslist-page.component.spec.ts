import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendslistPageComponent } from './friendslist-page.component';

describe('FriendslistPageComponent', () => {
  let component: FriendslistPageComponent;
  let fixture: ComponentFixture<FriendslistPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendslistPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendslistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
