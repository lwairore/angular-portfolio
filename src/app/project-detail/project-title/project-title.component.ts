import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../shared/project';

@Component({
  selector: 'lwkp-project-title',
  templateUrl: './project-title.component.html',
  styles: [
  ]
})
export class ProjectTitleComponent implements OnInit {
  @Input() projectDetails: {
    heading: string,
    tags:
    {
      title: string,
      slug: string
    }[],
    liveLink: string
  };

  constructor() { }

  ngOnInit(): void {
  }

}
