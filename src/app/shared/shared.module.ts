import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformNavbarDirective } from './transform-navbar.directive';



@NgModule({
  declarations: [TransformNavbarDirective],
  imports: [
    CommonModule
  ],
  exports: [
    TransformNavbarDirective,
  ]
})
export class SharedModule { }
