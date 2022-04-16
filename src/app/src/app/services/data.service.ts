import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb () {
    return {
      tasks: [
        
        {
          id: 0,
          task: "Work out",
          date: "15 July",
          time: "15:15"
        }   
      ]
    }
  }
}
