import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailComponent } from './project-detail.component';
import { ProjectResolverService } from './project-resolver.service';

const routes: Routes = [
  {
    path: ':projectSlug',
    component: ProjectDetailComponent,
    resolve: {
      project: ProjectResolverService
    }
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
