import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
@Component({
  selector: 'app-insert-comment',
  templateUrl: './insert-comment.component.html',
  styleUrls: ['./comments.component.scss']
})
export class InsertCommentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  commentTextContent?: any;
  getTextContent():void {
    this.commentTextContent = document.getElementById("content")?.textContent;
    console.log(this.commentTextContent);
  }


}
