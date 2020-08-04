import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { PageTitleComponent } from '../page-title/page-title.component';



@NgModule({
  declarations: [HomepageComponent, PageTitleComponent],
  imports: [
    CommonModule
  ]
})
export class HomepageModule { }
