import { Component, OnInit } from '@angular/core';
import { Setting } from './accessibility.interface';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.css'],
})
export class AccessibilityComponent implements OnInit {
  settings: Setting[] = [
    { field: 'level', title: 'Brightness', value: 80, min: 25, max: 100 },
    { field: 'fontSize', title: 'Font Size', value: 20, min: 10, max: 50 },
    { field: 'margin', title: 'Margin', value: 5, min: 1, max: 10 },
    {
      field: 'letterSpacing',
      title: 'Letter spacing',
      value: 1,
      min: 0,
      max: 10,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
