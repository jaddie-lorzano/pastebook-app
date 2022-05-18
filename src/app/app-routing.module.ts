import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { FriendRequestPageComponent } from './components/friend-request-page/friend-request-page.component';
import { AlbumComponent } from './components/main-page/album/album.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component:MainPageComponent},
  // {path: '**', pathMatch: 'full', component:MainPageComponent},
  {path: 'login', pathMatch: 'full', component:LoginPageComponent},
  {path: 'signup', pathMatch: 'full', component:SignupPageComponent},
  {path: 'home', pathMatch: 'full', component:MainPageComponent},
  {path: 'album', pathMatch: 'full', component:AlbumComponent},
  {path: 'friendrequest', pathMatch: 'full', component:FriendRequestPageComponent},
  {path: 'profile', pathMatch: 'full', component:ProfilePageComponent},
  {path: 'settings', pathMatch: 'full', component:SettingsPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
