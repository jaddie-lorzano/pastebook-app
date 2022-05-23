import { UserAccount } from "./UserAccount";
import { Album } from "./Album";

export interface Post {
    Id: number;
    UserAccount: UserAccount;
    Visibility: string;
    Content: string;
    CreatedDate: Date;
    Album: Album;
}