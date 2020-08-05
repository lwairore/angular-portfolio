import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  declarations: [HeaderComponent, ContactMeComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    ContactMeComponent,
  ]
})
export class CoreModule { }
