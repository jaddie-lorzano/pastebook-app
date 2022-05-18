import { UserAccount } from "./UserAccount";

export interface Friend {
    Id: number;
    UserAccount: UserAccount;
    FriendAccount: UserAccount;
    AddedDate: Date;
}