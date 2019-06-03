import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTemplateComponent1 } from './modal-template.component';

describe('ModalTemplateComponent', () => {
  let component: ModalTemplateComponent1;
  let fixture: ComponentFixture<ModalTemplateComponent1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTemplateComponent1 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTemplateComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
