import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionesGrillaComponent } from './canciones-grilla.component';

describe('CancionesGrillaComponent', () => {
  let component: CancionesGrillaComponent;
  let fixture: ComponentFixture<CancionesGrillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancionesGrillaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancionesGrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
