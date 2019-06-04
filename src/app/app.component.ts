import { Component, OnInit, OnDestroy, Type, Injector  } from '@angular/core';
import { Subscription } from 'rxjs';

import { ModalTemplateComponent1 } from './modal1/modal-template/modal-template.component';
import { ModalTemplateService1 } from './modal1/modal-template/modal-template.service';
import { ModalTemplateService2 } from './modal2/modal-template/modal-template.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  text : string;
  component: Type<any>;
  injector: Injector;
  bodyText: string;

  constructor(
    private modalService1: ModalTemplateService1,
    private modalService2: ModalTemplateService2){}

  ngOnInit(): void {
    this.text = 'aiueo';
    this.subscription = this.modalService1.closeEventObservable$.subscribe(
      (val) => {
        this.text = val;
        this.component = null;
      }
    );
    this.bodyText = 'This text can be updated in modal 1';
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  title = 'angular8-modal-sample';

  public onClick($event) {
    this.setModal();
  }

  private setModal() {
    this.component = ModalTemplateComponent1;
  }

  
  openModal(id: string) {
    this.modalService2.open(id);
  }

  closeModal(id: string) {
    this.modalService2.close(id);
  }
}
