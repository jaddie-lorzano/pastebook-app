import { Post } from "./Post";
import { UserAccount } from "./UserAccount";

export interface Like {
    Id: number;
    Post: Post
    LikerAccount: UserAccount
}