export interface Notification {
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
    CreatedDate: Date;
    NotificationType: string;
    Read: boolean;
    FriendRequests: {
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
    Likes: {
        Id: number;
        Post: {
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
            Visibility: string;
            TextContent: string;
            CreatedDate: Date;
            Album: {
                Id: number;
                Title: string;
                Description: string;
                CreatedDate: Date;
            }
        }
        LikerAccount: {
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
    }
    Comments: {
        Id: number;
        Post: {
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
            Visibility: string;
            Content: string;
            CreationDate: Date;
            Album: {
                Id: number;
                Title: string;
                Description: string;
                CreatedDate: Date;
            }
        }
        CommentingUser: {
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
        CommentContent: string;
        CreatedDate: Date;
    }
}