import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainComponent } from './components/main/main.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component:LandingPageComponent},
  {path: 'login', pathMatch: 'full', component:LoginPageComponent},
  {path: 'signup', pathMatch: 'full', component:SignupPageComponent},
  {path: 'home', pathMatch: 'full', component:MainPageComponent},
  {path: 'main', pathMatch: 'full', component:MainComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
