import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../core/project.service';
import { Project } from 'src/app/shared/project';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'lwkp-portfolio-cards',
  templateUrl: './portfolio-cards.component.html',
  styles: [
  ]
})
export class PortfolioCardsComponent implements OnInit, OnDestroy {
  routeSubscription: Subscription;
  projectServiceSubscription: Subscription;
  projects: any;
  toolSlug: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService) { }

  ngOnInit(): void {
   this.routeSubscription = this.route.params.pipe(
      flatMap((res1) =>
       this.projectService.getSpecificProjectsForATool(res1['toolSlug']))
    ).subscribe((projects) => {
      this.projects = projects;
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
    // this.projectServiceSubscription.unsubscribe();
  }

}
