import { UserAccount } from "./UserAccount";

export interface BlockedAccount {
    Id: number;
    BlockerAccount: UserAccount;
    BlockedAccount: UserAccount;
}