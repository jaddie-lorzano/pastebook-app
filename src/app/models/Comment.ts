import { Post } from './Post'
import { UserAccount } from './UserAccount';

export interface Comment {
    Id: number;
    Post: Post
    CommentingUser: UserAccount
    CommentContent: string;
    CreatedDate: Date;
}