import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component:LandingComponent},
  {path: 'login', pathMatch: 'full', component:LoginComponent},
  {path: 'sign-up', pathMatch: 'full', component:RegistrationComponent},
  {path: 'home', pathMatch: 'full', component:MainPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
