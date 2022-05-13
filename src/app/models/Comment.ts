export interface Comment {
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