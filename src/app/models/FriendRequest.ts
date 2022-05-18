import { UserAccount } from "./UserAccount";

export interface FriendRequest {
    Id: number;
    RequestReceiver: UserAccount;
    RequestSender: UserAccount;
    RequestDate: Date;
    Status: string;
  }