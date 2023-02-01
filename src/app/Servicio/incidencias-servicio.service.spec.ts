import { TestBed } from '@angular/core/testing';

import { IncidenciasServicioService } from './incidencias-servicio.service';

describe('IncidenciasServicioService', () => {
  let service: IncidenciasServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidenciasServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
