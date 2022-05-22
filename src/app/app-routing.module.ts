import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { FriendRequestPageComponent } from './components/friends-list-page/friend-request-page/friend-request-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { FriendsListPageComponent } from './components/friends-list-page/friends-list-page.component';
import { AlbumGalleryPageComponent } from './components/album-gallery-page/album-gallery-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AlbumComponent } from './components/album-gallery-page/album/album.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component:NewsFeedComponent},
  {path: 'login', pathMatch: 'full', component:LoginPageComponent},
  {path: 'signup', pathMatch: 'full', component:SignupPageComponent},
  {path: 'albums', pathMatch: 'full', component:AlbumGalleryPageComponent},
  {path: 'albums/:id', pathMatch: 'full', component:AlbumComponent},
  {path: 'friendrequest', pathMatch: 'full', component:FriendRequestPageComponent},
  //{path: 'profile', pathMatch: 'full', component:ProfilePageComponent},
  {path: 'friends', pathMatch: 'full', component:FriendsListPageComponent},
  {path: 'settings', pathMatch: 'full', component:SettingsPageComponent},
  {path: ':username', pathMatch: 'full', component:ProfilePageComponent},
  //{path: '**/', pathMatch: 'full', component:PageNotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
