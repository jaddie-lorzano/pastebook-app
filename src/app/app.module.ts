import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ErrorStateMatcher, MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MatDividerModule } from '@angular/material/divider';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { PostCardComponent } from './components/news-feed/post-card/post-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FriendRequestPageComponent } from './components/friends-list-page/friend-request-page/friend-request-page.component';
import { AlbumComponent } from './components/album-gallery-page/album/album.component';
import { CreateAlbumDialogComponent } from './components/album-gallery-page/create-album-dialog/create-album-dialog.component';
import { CommentsComponent } from './components/news-feed/post-card/comments/comments.component';
import { LikesComponent } from './components/news-feed/post-card/likes/likes.component';
import { NewPostCardComponent } from './components/news-feed/new-post-card/new-post-card.component';
import { NewPostDialogComponent } from './components/news-feed/new-post-card/new-post-dialog/new-post-dialog.component';
import { MatChipsModule } from '@angular/material/chips';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { PeopleWhoLikedComponent } from './components/profile-page/people-who-liked/people-who-liked.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumGalleryPageComponent } from './components/album-gallery-page/album-gallery-page.component';
import { FriendsListPageComponent } from './components/friends-list-page/friends-list-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomErrorStateMatcher } from './custom-state-matcher';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LandingPageComponent,
    NavBarComponent,
    PostCardComponent,
    FriendRequestPageComponent,
    AlbumComponent,
    CreateAlbumDialogComponent,
    SignupPageComponent,
    CommentsComponent,
    NewPostCardComponent,
    NewPostDialogComponent,
    ProfilePageComponent,
    PeopleWhoLikedComponent,
    NewsFeedComponent,
    AlbumGalleryPageComponent,
    FriendsListPageComponent,
    LikesComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatDividerModule,
    MatTooltipModule,
    MatMenuModule,
    MatDividerModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatDialogModule,
    MatChipsModule,
    MatBottomSheetModule,
    MatListModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: CustomErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
