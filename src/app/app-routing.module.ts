import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PortfolioCardsComponent } from './homepage/portfolio-cards/portfolio-cards.component';

const routes: Routes = [
  {
    path: '', component: HomepageComponent, children: [
      {
        path: '',
        component: PortfolioCardsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
