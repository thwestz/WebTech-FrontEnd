export enum STATUS {
    member,
    admin,
    superadmin, 
    ban
}

export class User {
    STATUS: STATUS;

    _id: string;
    email: string;
    password: string;
    fname: string;
    lname: string;
    status: STATUS;

    updatedAt: number;
    createdAt: number;
}