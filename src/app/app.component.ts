import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router,Event as RouterEvent ,NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { filter, map, Observable, of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List';

  loading: boolean = true;
  constructor( private router: Router) {
    this.router.events.subscribe((e: RouterEvent) => {
      this.navigationInterceptor(e);
    })
  }

  navigationInterceptor(event : RouterEvent){
    if (event instanceof NavigationStart){
      this.loading = true;
    }
    else if (event instanceof NavigationEnd){
      this.loading = false;
    }
    else if (event instanceof NavigationCancel){
      this.loading = false;
    }
    else if (event instanceof NavigationError){
      this.loading = false;
    }
    else {
      this.loading = false;
    }
  }
  ngOnInit () {
  }

}
