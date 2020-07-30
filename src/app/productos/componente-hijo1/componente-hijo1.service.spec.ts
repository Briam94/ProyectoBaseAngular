import { TestBed, inject } from '@angular/core/testing';

import { ComponenteHijo1Service } from './componente-hijo1.service';

describe('ComponenteHijo1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponenteHijo1Service]
    });
  });

  it('should be created', inject([ComponenteHijo1Service], (service: ComponenteHijo1Service) => {
    expect(service).toBeTruthy();
  }));
});
