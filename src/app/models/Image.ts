import { Album } from "./Album";

export interface Image {
    Id: number;
    Album: Album
    UploadedDate: Date;
    FilePath: string;
    Active: Boolean;
}