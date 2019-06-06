import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  HostListener,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.css']
})
export class ModalTemplateComponent implements OnInit {
  @ViewChild('modal', { static: true }) modalRef: ElementRef;

  @Input()
  modalContent: string;

  drag: boolean;

  @Output()
  finishEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {
    this.drag = false;
  }

  public onClick() {
    this.finishEvent.emit('finish!');
  }

  @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent) {
    this.drag = true;
  }

  @HostListener('mouseup', ['$event']) onMouseUp(event: MouseEvent) {
    this.drag = false;
  }

  @HostListener('document:mousemove', ['$event']) onMouseMove(e: MouseEvent) {
    if (this.drag) {
      this.modalRef.nativeElement.style.top =
        this.modalRef.nativeElement.offsetTop + e.movementY + 'px';
      this.modalRef.nativeElement.style.left =
        this.modalRef.nativeElement.offsetLeft + e.movementX + 'px';
    }
  }
}
