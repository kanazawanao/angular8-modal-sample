import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.css']
})
export class ModalTemplateComponent implements OnInit {

  @Input()
  modalContent: string;

  @Output()
  finishEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {
  } 

  public onClick() {
    this.finishEvent.emit('finish!');
  }
}
