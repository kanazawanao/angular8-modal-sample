import { TestBed } from '@angular/core/testing';

import { ModalTemplateService1 } from './modal-template.service';

describe('ModalTemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalTemplateService1 = TestBed.get(ModalTemplateService1);
    expect(service).toBeTruthy();
  });
});
