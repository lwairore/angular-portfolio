import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PortfolioCardsComponent } from './homepage/portfolio-cards/portfolio-cards.component';

const routes: Routes = [
  {
    path: '', component: HomepageComponent, children: [
      {
        path: '', redirectTo: '/all', pathMatch: 'full'
      },
      {
        path: ':toolSlug',
        component: PortfolioCardsComponent,
        pathMatch: 'full'

      },
    ]
  },
  {
    path: 'project',
    loadChildren: () => import('./project-detail/project-detail.module')
      .then(m => m.ProjectDetailModule)
  },
  {
    path: '**', redirectTo: '/all'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
