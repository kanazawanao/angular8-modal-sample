import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ModalTemplateService1 } from './modal-template.service';
import { ModalTemplate } from './modal-template.class';

@Component({
  selector: 'app-modal-template1',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.css']
})
export class ModalTemplateComponent1 implements OnInit, OnDestroy {
  @Input() public pageName = '';
  constructor(
    private modalService: ModalTemplateService1,
    private project: ModalTemplate) {}

  ngOnInit() {
    this.pageName = this.project.pageName;
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
