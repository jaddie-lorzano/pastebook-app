export interface UserAccount {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    emailAddress: string;
    birthday: Date;
    gender: string;
    mobileNumber: string;
    active: boolean;
    createdDate: Date;
    coverImagePath: string;
    profileImagePath: string;
  }