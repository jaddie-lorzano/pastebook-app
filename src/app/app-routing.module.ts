import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LandingComponent } from './components/landing/landing.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainComponent } from './components/main/main.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FriendslistPageComponent } from './components/friendslist-page/friendslist-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component:LandingComponent},
  {path: 'login', pathMatch: 'full', component:LoginPageComponent},
  {path: 'signup', pathMatch: 'full', component:RegistrationComponent},
  {path: 'home', pathMatch: 'full', component:MainPageComponent},
  {path: 'main', pathMatch: 'full', component:MainComponent},
  {path: 'friends', pathMatch: 'full', component:FriendslistPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
