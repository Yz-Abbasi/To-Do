import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, Event as RouterEvent,NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { filter, map, Observable, of } from 'rxjs'
import { MatLegacyProgressSpinner as MatProgressSpinner } from '@angular/material/legacy-progress-spinner';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
loading: boolean = true;

constructor( private router: Router) {
  this.router.events.subscribe((e: RouterEvent) => {
    this.navigationInterceptor(e);
  })
}

  

  ngOnInit(): void {
  }
  navigationInterceptor(event : RouterEvent){
    if (event instanceof NavigationStart){
      this.loading = true;
    }
    else if (event instanceof NavigationEnd){
      this.loading = true;
    }
    else if (event instanceof NavigationCancel){
      this.loading = false;
    }
    else if (event instanceof NavigationError){
      this.loading = false;
    }
    else {
      this.loading = true;
    }
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  }
}
