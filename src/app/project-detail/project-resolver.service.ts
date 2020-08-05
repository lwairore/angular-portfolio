import { Injectable } from '@angular/core';
import { Router,
         Resolve,
        RouterStateSnapshot,
      ActivatedRouteSnapshot, 
      RouterState} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { ProjectService } from '../core/project.service';
import { Project } from '../core/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectResolverService implements Resolve<Project> {

  constructor(
    private projectSerice: ProjectService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<Project> | Observable<never>{
    const projectSlug = route.paramMap.get('projectSlug');

    return this.projectSerice.getProject(projectSlug).pipe(
      take(1),
      mergeMap(project => {
        if (project){
          return of(project);
        }
        else {
          // project slug not found
          this.router.navigate(['/all']);
          return EMPTY;
        }
      })
    );
  }
}