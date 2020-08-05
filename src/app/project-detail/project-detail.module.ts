import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailRoutingModule } from './project-detail-routing.module';
import { ProjectDetailComponent } from './project-detail.component';
import { ProjectTitleComponent } from './project-title/project-title.component';
import { ProjectGalleryComponent } from './project-gallery/project-gallery.component';



@NgModule({
  declarations: [ProjectDetailComponent, ProjectTitleComponent, ProjectGalleryComponent],
  imports: [
    CommonModule,
    ProjectDetailRoutingModule
  ]
})
export class ProjectDetailModule { }
