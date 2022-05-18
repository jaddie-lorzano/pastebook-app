import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { FriendRequestPageComponent } from './components/friends-list-page/friend-request-page/friend-request-page.component';
import { AlbumComponent } from './components/album-gallery-page/album/album.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FriendsListPageComponent } from './components/friends-list-page/friends-list-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component:NewsFeedComponent},
  {path: 'login', pathMatch: 'full', component:LoginPageComponent},
  {path: 'signup', pathMatch: 'full', component:SignupPageComponent},
  {path: 'albums', pathMatch: 'full', component:AlbumComponent},
  {path: 'friendrequest', pathMatch: 'full', component:FriendRequestPageComponent},
  {path: 'profile', pathMatch: 'full', component:ProfilePageComponent},
  {path: 'friends', pathMatch: 'full', component:FriendsListPageComponent},
  {path: '**', pathMatch: 'full', component:LandingPageComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
