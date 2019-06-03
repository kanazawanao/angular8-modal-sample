import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { ModalTemplateComponent1 } from './modal1/modal-template/modal-template.component';
import { ModalTemplateComponent2 } from './modal2/modal-template/modal-template.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalTemplateComponent1,
    ModalTemplateComponent2
  ],
  entryComponents: [
    ModalTemplateComponent1,
  ],
  imports: [
    FormsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
