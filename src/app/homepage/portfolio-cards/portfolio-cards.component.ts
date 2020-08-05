import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../core/project.service';
import { Project } from 'src/app/shared/project';

@Component({
  selector: 'lwkp-portfolio-cards',
  templateUrl: './portfolio-cards.component.html',
  styles: [
  ]
})
export class PortfolioCardsComponent implements OnInit, OnDestroy {
  routeSubscription: Subscription;
  projectServiceSubscription: Subscription;
  projects: Project[];
  frameworkSlug: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe((params) => {
      this.frameworkSlug = params['frameworkSlug']
      this.projectServiceSubscription = this.projectService.getSpecificProjectsForAFramework(this.frameworkSlug).subscribe(
        (projects: Project[]) => {
          this.projects = projects;
        }
      )
      if (this.projects.length < 1){
        if (this.frameworkSlug === '/' || this.frameworkSlug === 'all' || this.frameworkSlug === undefined){
          this.projectServiceSubscription = this.projectService.getAllProjects().subscribe(
            (projects: Project[]) => {
              this.projects = projects;
            }
          )
        }
  
        else {
          this.router.navigateByUrl(`/all`);
        }
      }
    }, (err) => console.log(err))
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
    this.projectServiceSubscription.unsubscribe();
  }

}
