import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor() {}
  list = [];
  listItem: string;
  public saveData(key: string, value: string) {
    // this.listItem = JSON.stringify(value);
    localStorage.setItem(key, JSON.stringify(value));
    console.log('works');
  }
  public getData(key: string) {
    return localStorage.getItem(key);
  }
  public removeData(key: string) {
    console.log('remove item works');
    localStorage.removeItem(key);
  }
  public clearData() {
    localStorage.clear();
  }
}
