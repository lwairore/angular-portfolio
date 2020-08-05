import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lwkp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  
  routerSubscription: Subscription;
  loading: boolean;
  
  constructor(private router: Router){}

  ngOnInit(): void {
    this.trackNavigationLoading();
  }

  trackNavigationLoading(): void {
    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      switch(true){
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
  
}
