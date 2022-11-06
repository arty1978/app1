// import { parseHostBindings } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  item: any;
  itemsList: any[] = [];

  addItem() {
    this.itemsList.push(this.item);
    this.item = '';
    this.localStore.saveData('items', JSON.stringify(this.itemsList));
  }
  removeItem(i: number) {
    this.itemsList.splice(i, 1);
  }

  constructor(public localStore: LocalService) {}

  ngOnInit() {
    // console.log('hi');
    // const value = this.localStore.getData(JSON.parse('items'));
    // value = value;
  }
}
