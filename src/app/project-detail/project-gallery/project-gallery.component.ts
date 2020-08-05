import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lwkp-project-gallery',
  templateUrl: './project-gallery.component.html',
  styles: [
  ]
})
export class ProjectGalleryComponent implements OnInit {
  @Input() propertyGallery: string;

  constructor() { }

  ngOnInit(): void {
  }

}
