import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  isAlertActivated: boolean;
  alertText: string;
  alert(txt: string) {
    this.alertText = txt;
    this.isAlertActivated = true;
  }
  constructor() {}
}
