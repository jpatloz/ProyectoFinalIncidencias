import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosRevisionComponent } from './datos-revision.component';

describe('DatosRevisionComponent', () => {
  let component: DatosRevisionComponent;
  let fixture: ComponentFixture<DatosRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosRevisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
