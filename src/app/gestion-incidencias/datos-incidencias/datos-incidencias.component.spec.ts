import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosIncidenciasComponent } from './datos-incidencias.component';

describe('DatosIncidenciasComponent', () => {
  let component: DatosIncidenciasComponent;
  let fixture: ComponentFixture<DatosIncidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosIncidenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
