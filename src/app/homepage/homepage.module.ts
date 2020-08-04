import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { PortfolioGridComponent } from './portfolio-grid/portfolio-grid.component';



@NgModule({
  declarations: [HomepageComponent, PageTitleComponent, PortfolioGridComponent],
  imports: [
    CommonModule
  ]
})
export class HomepageModule { }
