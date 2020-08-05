import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailRoutingModule } from './project-detail-routing.module';
import { ProjectDetailComponent } from './project-detail.component';
import { ProjectTitleComponent } from './project-title/project-title.component';
import { PropertyGalleryComponent } from './property-gallery/property-gallery.component';



@NgModule({
  declarations: [ProjectDetailComponent, ProjectTitleComponent, PropertyGalleryComponent],
  imports: [
    CommonModule,
    ProjectDetailRoutingModule
  ]
})
export class ProjectDetailModule { }
