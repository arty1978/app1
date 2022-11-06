import { Component, OnInit } from '@angular/core';
import { Menu } from './navbar.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  menu: Menu[] = [
    { route: 'home', title: 'Home' },
    { route: 'students', title: 'Students' },
    { route: 'list', title: 'List' },
    { route: 'contact', title: 'Contact' },
    { route: 'users', title: 'Users' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
