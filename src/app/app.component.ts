import { Component, OnInit, ComponentFactory, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ModalTemplateComponent } from './modal/modal-template/modal-template.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  factory: ComponentFactory<ModalTemplateComponent>;
  showModal: boolean;

  constructor(
  ){}

  ngOnInit() {
    this.showModal = false;
  }

  onClick() {
    this.showModal = true;
  }

  finishEvent(val: string) {
    this.showModal = false;
    console.log(val);
  }
}
