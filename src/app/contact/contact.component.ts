import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  name: string;
  phone: string;
  email: string;
  content: string;
  send() {}
  constructor() {}

  ngOnInit(): void {}
}
