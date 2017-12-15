export enum STATUS {
    member,
    admin,
    superadmin, 
    ban
}

export class User {
    _id: string;
    email: string;
    password: string;
    fname: string;
    lname: string;
    status: STATUS;

    

    updatedAt: number;
    createdAt: number;

    tempEStatus : number;
}
