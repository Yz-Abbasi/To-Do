import { Injectable } from '@angular/core';
import { Router, RouterEvent, Event } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
private _loading = new BehaviorSubject<boolean>(false);
public readonly $loading = this._loading.asObservable;
  constructor(private router: Router) { 
  }
}
