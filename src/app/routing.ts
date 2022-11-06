import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { StudentsComponent } from './students/students.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'users', component: UsersComponent },
  { path: 'students', component: StudentsComponent },
];
