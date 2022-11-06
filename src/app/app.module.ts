import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { routes } from './routing';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { StudentsComponent } from './students/students.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { RangeComponent } from './range/range.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ListComponent,
    ContactComponent,
    UsersComponent,
    StudentsComponent,
    AccessibilityComponent,
    RangeComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
