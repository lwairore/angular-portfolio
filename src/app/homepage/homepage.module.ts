import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { PortfolioGridComponent } from './portfolio-grid/portfolio-grid.component';
import { PortfolioCardsComponent } from './portfolio-cards/portfolio-cards.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HomepageComponent, PageTitleComponent, PortfolioGridComponent, PortfolioCardsComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomepageModule { }
