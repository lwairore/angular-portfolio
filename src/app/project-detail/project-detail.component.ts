import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from '../shared/project';

@Component({
  selector: 'lwkp-project-detail',
  templateUrl: './project-detail.component.html',
  styles: [
  ]
})
export class ProjectDetailComponent implements OnInit {
  routeDataSubscription: Subscription;
  projectDetails: Project;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProjectRouteData();
  }

  loadProjectRouteData(): void {
    this.routeDataSubscription = this.activatedRoute.data
      .subscribe((data: { project: Project }) => {
        this.projectDetails = data.project;
      })
  }

}
