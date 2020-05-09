import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreatmentComponent } from './treatment/treatment.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'listTreatment', component: TreatmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
