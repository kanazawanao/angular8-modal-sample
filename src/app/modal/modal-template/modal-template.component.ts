import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.css']
})
export class ModalTemplateComponent implements OnInit, OnDestroy {

  @Output()
  finishEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {
  } 
  ngOnDestroy() {
    console.log('destroyed');
  }
  public onClick($event) {
    this.finishEvent.emit('finish!');
  }
}
