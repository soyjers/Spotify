import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumesGrillasComponent } from './albumes-grillas.component';

describe('AlbumesGrillasComponent', () => {
  let component: AlbumesGrillasComponent;
  let fixture: ComponentFixture<AlbumesGrillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumesGrillasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumesGrillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
