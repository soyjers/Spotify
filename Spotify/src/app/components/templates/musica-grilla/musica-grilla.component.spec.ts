import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicaGrillaComponent } from './musica-grilla.component';

describe('MusicaGrillaComponent', () => {
  let component: MusicaGrillaComponent;
  let fixture: ComponentFixture<MusicaGrillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicaGrillaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicaGrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
