import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomArtistaComponent } from './zoom-artista.component';

describe('ZoomArtistaComponent', () => {
  let component: ZoomArtistaComponent;
  let fixture: ComponentFixture<ZoomArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoomArtistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoomArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
