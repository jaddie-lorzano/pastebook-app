export interface FriendRequest {
    Id: number;
    RequestReceiver: {
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
    RequestSender: {
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
    RequestDate: Date;
    Status: string;
  }