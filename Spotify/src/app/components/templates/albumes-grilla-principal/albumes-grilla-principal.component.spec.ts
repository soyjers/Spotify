import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumesGrillaPrincipalComponent } from './albumes-grilla-principal.component';

describe('AlbumesGrillaPrincipalComponent', () => {
  let component: AlbumesGrillaPrincipalComponent;
  let fixture: ComponentFixture<AlbumesGrillaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumesGrillaPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumesGrillaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});