import { Injectable } from '@angular/core';
import { CoreModule } from './core.module';
import { Project } from '../shared/project';
import { BehaviorSubject } from 'rxjs';
import { PROJECTS } from './mock-project';
import { map } from 'rxjs/operators';
import { TOOLS } from './mock-tools';

@Injectable({
  providedIn: CoreModule
})
export class ProjectService {
  private projects$: BehaviorSubject<Project[]>;

  constructor() { 
    this.projects$ = new BehaviorSubject<Project[]>(PROJECTS);
  }

  getAllProjects(): BehaviorSubject<Project[]> {
    return this.projects$;
  }

  getProject(projectSlug: string) {
    return this.getAllProjects().pipe(
      map(projects => projects.find(project => project.slug === projectSlug))
    );
  }

  getSpecificProjectsForATool(toolSlug: string){
    // console.log('Tool slug', toolSlug);
    let toolSlugExists: boolean = this.validToolSlug(toolSlug);
    if (toolSlugExists){
      // console.log('Django been processed')
      return this.getAllProjects().pipe(
        map(projects => projects.filter(project => project.tags.some((tag => tag.slug === toolSlug))))
      );
    }
    return this.getAllProjects();
    
  }

  validToolSlug(toolSlug: string): boolean {
    let tool = TOOLS.find(tool => tool.slug === toolSlug);
    if (tool) return true;
    return false;
  }
}
