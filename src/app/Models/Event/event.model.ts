import { Detail } from "./detail.model";
import { Time } from "./time.model";
import { User } from "../user.model";

export enum STATUS {
    pending,
    approved,
    reject
}


export class Event {

    userID: string;
    eName : string;
    eLOGO : string;
    eDate : Time[];
    eLocat : string;
    eCap : number;
    userRegistedID : string[];
    eMainDetail : string;
    status : STATUS;
    eSubDetail : Detail[];

    createdAt: number;
    expiredAt: number;
    updatedAt: number;

    tempUser : User;

}
