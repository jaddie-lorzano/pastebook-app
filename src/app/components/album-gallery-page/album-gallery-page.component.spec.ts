import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumGalleryPageComponent } from './album-gallery-page.component';

describe('AlbumGalleryPageComponent', () => {
  let component: AlbumGalleryPageComponent;
  let fixture: ComponentFixture<AlbumGalleryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumGalleryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumGalleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
