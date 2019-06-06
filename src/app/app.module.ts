import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModalTemplateComponent } from './modal/modal-template/modal-template.component';

@NgModule({
  declarations: [AppComponent, ModalTemplateComponent],
  entryComponents: [ModalTemplateComponent],
  imports: [FormsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
