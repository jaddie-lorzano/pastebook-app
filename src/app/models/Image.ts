export interface Image {
    Id: number;
    Album: {
        Id: number;
        Title: string;
        Description: string;
        CreatedDate: Date;
    }
    UploadedDate: Date;
    FilePath: string;
    Active: Boolean;
}