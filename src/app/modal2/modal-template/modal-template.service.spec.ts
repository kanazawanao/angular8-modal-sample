import { TestBed } from '@angular/core/testing';

import { ModalTemplateService2 } from './modal-template.service';

describe('ModalTemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalTemplateService2 = TestBed.get(ModalTemplateService2);
    expect(service).toBeTruthy();
  });
});
