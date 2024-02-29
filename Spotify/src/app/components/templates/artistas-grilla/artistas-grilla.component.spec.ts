import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasGrillaComponent } from './artistas-grilla.component';

describe('ArtistasGrillaComponent', () => {
  let component: ArtistasGrillaComponent;
  let fixture: ComponentFixture<ArtistasGrillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistasGrillaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtistasGrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
