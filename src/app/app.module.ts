import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { HomeComponent } from './home/home.component';
import { AddTreatmentComponent } from './add-treatment/add-treatment.component';
import { EditTreatmentComponent } from './edit-treatment/edit-treatment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TreatmentComponent,
    HomeComponent,
    AddTreatmentComponent,
    EditTreatmentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
