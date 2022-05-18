import { Comment } from "./Comment";
import { FriendRequest } from "./FriendRequest";
import { Like } from "./Like";
import { UserAccount } from "./UserAccount";

export interface Notification {
    Id: number;
    UserAccount: UserAccount;
    CreatedDate: Date;
    NotificationType: string;
    Read: boolean;
    FriendRequests: FriendRequest;
    Likes: Like;
    Comments: Comment;
}