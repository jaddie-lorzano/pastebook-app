import { Album } from "./Album";

export interface Image {
    id: number;
    albumId: number;
    uploadedDate: Date;
    name: string;
    data: string;
}