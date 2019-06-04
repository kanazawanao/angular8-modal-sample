import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ModalTemplateService1 } from './modal-template.service';

@Component({
  selector: 'app-modal-template1',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.css']
})
export class ModalTemplateComponent1 implements OnInit, OnDestroy {
  @Input() public pageName = '';
  constructor(
    private modalService: ModalTemplateService1) {}

  ngOnInit() {
    this.pageName = 'test';
  } 
  ngOnDestroy() {
    // モーダルダイアログが閉じたタイミングで出力される
    console.log('destroyed');
  }
  public onClick($event) {
    this.notifyCloseModal('aaa');
  }
  private notifyCloseModal(val: string) {
    this.modalService.requestCloseModal(val);
  }
}
