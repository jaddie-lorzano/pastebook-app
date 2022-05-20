export interface Album {
    id: number;
    coverPhoto: string;
    title: string;
    description: string;
    createdDate: Date;
    coverPhoto: string;
}

export interface CreateAlbum {
    userAccountId: number;
    title: string;
    description: string | null;
}