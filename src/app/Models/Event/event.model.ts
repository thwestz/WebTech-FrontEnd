import { Detail } from "./detail.model";

export enum STATUS {
    open,
    close
}

export class Event {
    STATUS : STATUS;

    id : string;
    uidRegis : string[]
    ;
    name : string;
    location : string;

    detail : Detail[];

    limit : number;
    startDate : number;
    regisDate : number;
    closeDate : number;

    createdBy : string;
    createdAt : number;
    updatedAt : number;
}