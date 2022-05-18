export interface Friend {
    Id: number;
    UserAccount: {
        Id: number;
        FirstName: string;
        LastName: string;
        EmailAddress: string;
        Birthday: Date;
        Gender: string;
        MobileNumber: string;
        Active: boolean;
        CreatedDate: Date;
    }
    FriendAccount: {
        Id: number;
        FirstName: string;
        LastName: string;
        EmailAddress: string;
        Birthday: Date;
        Gender: string;
        MobileNumber: string;
        Active: boolean;
        CreatedDate: Date;
    }
    AddedDate: Date;
}