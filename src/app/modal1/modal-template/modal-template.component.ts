import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalTemplateService1 } from './modal-template.service';

@Component({
  selector: 'app-modal-template1',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.css']
})
export class ModalTemplateComponent1 implements OnInit, OnDestroy {
  public title = '';
  constructor(private modalService: ModalTemplateService1) { }

  ngOnInit() {
  } 
  ngOnDestroy() {
    // モーダルダイアログが閉じたタイミングで出力される
    console.log('destroyed');
  }
  public onClick($event) {
    this.notifyCloseModal();
  }
  private notifyCloseModal() {
    this.modalService.requestCloseModal();
  }
}
