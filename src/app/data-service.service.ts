import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  isLandingOverLapped = new Subject<boolean>();

  constructor() { 
    this.isLandingOverLapped.next(true);
  }
  // getBoolean() {
  //   this.isLandingOverLapped.next(true);
  // }

  setBoolean(value:boolean) {
    this.isLandingOverLapped.next(value);
  }
}
