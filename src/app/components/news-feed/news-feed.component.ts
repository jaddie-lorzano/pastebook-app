import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  @Input() posts: any = [];
  @Output() scrolled = new EventEmitter<boolean>();

  pageNumber: number = 1;
  itemsPerScroll: number = 10;

  isLoggedIn: boolean = false;
  helper = new JwtHelperService();
  constructor(
    private authService: AuthService,
    private postService: PostService,
    private router: Router) { }

  userAccountId!: number;
  timelinePost: any;

  fromProfile!: boolean;
  ngOnInit(): void {
    if(!!this.posts){
      this.fromProfile = false
    }else{
      this.fromProfile = true
    }
    this.userAccountId = Number(localStorage.getItem('userId'));
    const token = localStorage.getItem("pastebook_auth")!;
    if (this.helper.isTokenExpired(token) && token !== null) {
      alert("3 Days Log In Limit Reached");
      this.authService.logout();
      this.router.navigate(['/login']);
    }

    this.authService.isLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    if(!this.isLoggedIn){
      this.router.navigate(['/login']);
    }
    this.getTimelinePosts();
  }

  getTimelinePosts(){
    this.postService.getTimelinePosts(this.userAccountId, this.pageNumber, this.itemsPerScroll).subscribe(response => {
      this.timelinePost = response;
      console.log('timeline posts: ' + Object.keys(this.timelinePost).length);
    });
  }

  onScroll() {
    console.log("test")
    this.pageNumber += 1;
    this.getTimelinePosts();
  }
}
