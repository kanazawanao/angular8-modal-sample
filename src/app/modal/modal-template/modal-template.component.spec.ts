import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTemplateComponent } from './modal-template.component';

describe('ModalTemplateComponent', () => {
  let component: ModalTemplateComponent;
  let fixture: ComponentFixture<ModalTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalTemplateComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit Test', () => {
    const fixture = TestBed.createComponent(ModalTemplateComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.drag).toEqual(false);
  });

  it('onClick Test', () => {
    const fixture = TestBed.createComponent(ModalTemplateComponent);
    const app = fixture.debugElement.componentInstance;
    app.onClick();
  });

  it('onMouseDown Test', () => {
    const fixture = TestBed.createComponent(ModalTemplateComponent);
    const app = fixture.debugElement.componentInstance;
    app.onMouseDown();
    expect(app.drag).toEqual(true);
  });

  it('onMouseUp Test', () => {
    const fixture = TestBed.createComponent(ModalTemplateComponent);
    const app = fixture.debugElement.componentInstance;
    app.onMouseUp();
    expect(app.drag).toEqual(false);
  });

  it('onMouseMove Test1', () => {
    const fixture = TestBed.createComponent(ModalTemplateComponent);
    const app = fixture.debugElement.componentInstance;
    app.drag = false;
    let event: MouseEvent = new MouseEvent('mousemove');
    app.onMouseMove(event);
  });

  it('onMouseMove Test2', () => {
    const fixture = TestBed.createComponent(ModalTemplateComponent);
    const app = fixture.debugElement.componentInstance;
    app.drag = true;
    let event: MouseEvent = new MouseEvent('mousemove');
    app.onMouseMove(event);
  });
});
