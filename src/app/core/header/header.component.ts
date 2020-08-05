import { Component, OnInit } from '@angular/core';
import { Location, ViewportScroller } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router'
import { filter } from 'rxjs/operators';

@Component({
  selector: 'lwkp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public showBackButton: boolean = true;

  constructor(
    private location: Location,
    private router: Router,
    private viewportScroller: ViewportScroller) {
      this.router.events.pipe(
        filter(e => e instanceof NavigationEnd))
        .subscribe((e: NavigationEnd) => {
          if (e.url.startsWith('/project')){
            this.showBackButton = true;
            this.viewportScroller.scrollToPosition([0, 0]);
            
          }
          this.viewportScroller.setHistoryScrollRestoration("auto");
        })
     }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

}
