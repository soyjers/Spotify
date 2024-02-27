import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumesZoomComponent } from './albumes-zoom.component';

describe('AlbumesZoomComponent', () => {
  let component: AlbumesZoomComponent;
  let fixture: ComponentFixture<AlbumesZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumesZoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumesZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
