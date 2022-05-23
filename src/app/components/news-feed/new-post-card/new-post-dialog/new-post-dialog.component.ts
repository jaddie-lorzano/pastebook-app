import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { UserAccount } from 'src/app/models/UserAccount';
import { ImageService } from 'src/app/services/image.service';
import { PostService } from 'src/app/services/post.service';
import { UserAccountService } from 'src/app/services/user-account.service';

@Component({
  selector: 'app-new-post-dialog',
  templateUrl: './new-post-dialog.component.html',
  styleUrls: ['./new-post-dialog.component.scss']
})
export class NewPostDialogComponent implements OnInit {

  defaultMessage: boolean = true;

  userAccountId!: number;
  userAccount!: UserAccount;

  imageFile: any;
  imageFileName: string = "";

  visibility: string = 'public'; //public default
  
  openUploadPhoto?:boolean;

  constructor(
    public dialogRef: MatDialogRef<NewPostDialogComponent>, 
    private userAccountService: UserAccountService,
    private postService: PostService,
    private imageService: ImageService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
    this.userAccountId = Number(localStorage.getItem('userId')!);
    this.userAccountService.getUserAccount(this.userAccountId).subscribe(response => {
      this.userAccount = response;
    });
  }

  getImagePath(base64string: string) {
    var imagePath = this.imageService.convertBase64TextString(base64string);
    return imagePath;
  }

  postTextContent?: any;
  getTextContent():void {
    this.postTextContent = document.getElementById("content")?.textContent;
    console.log(this.postTextContent);
  }
  setPostToPublic(){
    this.visibility = 'public';
  }

  setPostToFriends(){
    this.visibility = 'friends';
  }

  submitNewPost(){
    const formData = new FormData();
    formData.append('profileImage',this.imageFile)
    this.imageService.uploadProfileImages(formData, this.userAccountId);

    const post = {
      "userAccountId": this.userAccountId,
      "visibility": this.visibility,
      "textContent": document.getElementById("content")?.textContent
    }
    alert(post);
    this.postService.createNewPost(post).subscribe(response => {
      alert("new post published");
      console.log(response);
    }, (err) => {
      alert("post failed");
    });
  }

  onFileSelect(event:any) {
    this.imageFile = event.target.files[0];
    this.imageFileName = event.target.files[0].name;
  }
}
