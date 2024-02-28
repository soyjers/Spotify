import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarContenidoComponent } from './agregar-cancion.component';

describe('AgregarContenidoComponent', () => {
  let component: AgregarContenidoComponent;
  let fixture: ComponentFixture<AgregarContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarContenidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
