import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { UserAccount } from 'src/app/models/UserAccount';
import { LikeService } from 'src/app/services/like.service';
import { UserAccountService } from 'src/app/services/user-account.service';
import { LikesComponent } from './likes/likes.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() posts: any = [];

  seeCommentsSection: boolean = false;
  insertComment: boolean = false;

  userAccountId!: number;
  userAccount!: UserAccount;

  likes!: any;
  constructor(
    public dialog: MatDialog,
    private userAccountService: UserAccountService,
    private likeService: LikeService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.userAccountId = Number(localStorage.getItem('userId')!);
    this.userAccountService.getUserAccount(this.userAccountId).subscribe(response => {
      this.userAccount = response;
    });
  }

  openDialog(postId: number) {
    this.likeService.getAllLikesByPostId(postId).subscribe(response => {
      let dialogRef = this.dialog.open(LikesComponent, );
      let instance = dialogRef.componentInstance;
      instance.likes = response;
    });
  }

  convertBase64TextString(base64string: string) {
    var imagePath = this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64," + base64string);
    console.log(imagePath);
    return imagePath;
  }

  likePost(postId: number){
    const body = {
      "postId": postId,
      "likerAccountId": this.userAccountId
    }
    this.likeService.likePost(body).subscribe(response=>{
      alert("like success");
    }, (err) =>{
      alert("like fail");
    })
  }

  checkLikeStatus(postId: number){
    this.likeService.checkLikeStatus(postId, this.userAccountId).subscribe(response =>{
      alert("This post is liked")
    }, (err) =>{
      alert("This post is NOT liked")
    })
  }

  getLikes(){
    this.likeService.getAllLikesByUserId(this.userAccountId).subscribe(response => {
      this.likes = response;
    });
  }

  getLikesByPostId(postId: number){
    this.likeService.getAllLikesByPostId(postId).subscribe(response => {
      this.likes = response;
    });
  }

  getlikescount(postId: number){
    this.likeService.getAllLikesByPostId(postId).subscribe(response => {
      return response;
    });
  }
}
