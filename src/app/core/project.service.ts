import { Injectable } from '@angular/core';
import { CoreModule } from './core.module';
import { Project } from './project';
import { BehaviorSubject } from 'rxjs';
import { PROJECTS } from './mock-project';
import { map } from 'rxjs/operators';

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
}
