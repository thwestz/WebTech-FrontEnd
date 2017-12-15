import { Detail } from "./detail.model";
import { Time } from "./time.model";
import { User } from "../user.model";
import { eSign } from "./eSign.model";

export enum STATUS {
    pending,
    approved,
    reject
}


export class Event {
    _id : string;
    userID: string;
    eName : string;
    eLOGO : string;
    eDate : Time[];
    eLocat : string;
    eCap : number;
    eSign : eSign[];
    eMainDetail : string;
    status : STATUS;
    eSubDetail : Detail[];

    createdAt: number;
    expiredAt: number;
    updatedAt: number;

    tempUser : User;

}
