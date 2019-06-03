import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTemplateComponent2 } from './modal-template.component';

describe('ModalTemplateComponent', () => {
  let component: ModalTemplateComponent2;
  let fixture: ComponentFixture<ModalTemplateComponent2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTemplateComponent2 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTemplateComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
