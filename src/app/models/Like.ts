export interface Like {
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