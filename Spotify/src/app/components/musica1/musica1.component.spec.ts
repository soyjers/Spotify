import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Musica1Component } from './musica1.component';

describe('Musica1Component', () => {
  let component: Musica1Component;
  let fixture: ComponentFixture<Musica1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Musica1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Musica1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
