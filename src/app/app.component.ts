import { Component, OnInit, OnDestroy  } from '@angular/core';
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
  public modal: any = null;
  bodyText: string;
  constructor(
    private modalService1: ModalTemplateService1,
    private modalService2: ModalTemplateService2){}

  ngOnInit(): void {
    this.subscription = this.modalService1.closeEventObservable$.subscribe(
      () => {
        // プロパティ modal に null をセットすることでコンポーネントを破棄する
        // このタイミングで ModalComponent では ngOnDestroy が走る
        this.modal = null;
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
    this.modal = ModalTemplateComponent1;
  }

  
  openModal(id: string) {
    this.modalService2.open(id);
  }

  closeModal(id: string) {
      this.modalService2.close(id);
  }
}
