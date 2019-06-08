import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ModalTemplateComponent } from './modal/modal-template/modal-template.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, ModalTemplateComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular8-modal-sample'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular8-modal-sample');
  });

  it('ngOnInit Test', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.modalContent).toEqual('modal sample');
  });

  it('showModal Test', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.onClick();
    expect(app.showModal).toEqual(true);
  });

  it('finishEvent Test', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.finishEvent('test');
    expect(app.showModal).toEqual(false);
    expect(app.closeTest).toEqual('test');
  });
});
