import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css'],
})
export class RangeComponent implements OnInit {
  value: string | number = 30;
  min: number = 10;
  max: number = 50;
  constructor() {}

  ngOnInit(): void {}
}
