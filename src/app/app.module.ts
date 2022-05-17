import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MainPageComponent } from './components/main-page/main-page.component'
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login-page/login/login.component';
import { NavBarComponent } from './components/main-page/nav-bar/nav-bar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { PostCardComponent } from './components/main-page/post-card/post-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FriendRequestPageComponent } from './components/friend-request-page/friend-request-page.component';
import { AlbumComponent } from './components/main-page/album/album.component';
import { CreateAlbumDialogComponent } from './components/main-page/album/create-album-dialog/create-album-dialog.component';
import { SignupComponent } from './components/signup-page/signup/signup.component';
import { CommentsComponent } from './components/main-page/post-card/comments/comments.component';
import { LikesComponent } from './components/main-page/post-card/likes/likes.component';
import { NewPostCardComponent } from './components/main-page/new-post-card/new-post-card.component';
import { NewPostDialogComponent } from './components/main-page/new-post-card/new-post-dialog/new-post-dialog.component';
import { MatChipsModule } from '@angular/material/chips';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { PeopleWhoLikedComponent } from './components/profile-page/people-who-liked/people-who-liked.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    LoginComponent,
    LandingPageComponent,
    NavBarComponent,
    PostCardComponent,
    FriendRequestPageComponent,
    AlbumComponent,
    CreateAlbumDialogComponent,
    SignupPageComponent,
    SignupComponent,
    CommentsComponent,
    LikesComponent,
    NewPostCardComponent,
    NewPostDialogComponent
    ProfilePageComponent,
    PeopleWhoLikedComponent,
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
