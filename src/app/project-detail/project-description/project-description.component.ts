import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lwkp-project-description',
  templateUrl: './project-description.component.html',
  styles: [
  ]
})
export class ProjectDescriptionComponent implements OnInit {
  @Input() projectDescription: {
    name: string;
    githubRepo: string;
    liveLink: string;
    objective: string;
    tags: {
      title: string,
      slug: string,
      resourceURL: string,
      description: string
    };
    collaborators: {
      fullName: string;
      githubUsername: string;
      githubProfile: string;
      avatarURL: string;
    };
    description: string;
    userStories: string[];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
