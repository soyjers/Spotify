import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAlbumComponent } from './agregar-album.component';

describe('AgregarAlbumComponent', () => {
  let component: AgregarAlbumComponent;
  let fixture: ComponentFixture<AgregarAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarAlbumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
