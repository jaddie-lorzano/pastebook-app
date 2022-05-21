export interface Album {
    id: number;
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

export interface EditAlbum {
    title: string | null;
    description: string | null;
}

export interface AlbumId {
    id: number;
}