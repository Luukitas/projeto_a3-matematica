import { TestBed } from '@angular/core/testing';

import { ListarPacientesService } from './listar-pacientes.service';

describe('ListarPacientesService', () => {
  let service: ListarPacientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarPacientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
