import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailComponent } from './project-detail.component';

const routes: Routes = [
  {
    path: ':projectSlug',
    component: ProjectDetailComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectDetailRoutingModule { }
