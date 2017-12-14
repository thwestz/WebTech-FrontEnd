import { Detail } from "./detail.model";

export class Event {

    _id : string;
    eName: string;
    userID: string;
    eDate: string;
    eLocat: string;
    eDetail: string;
    eSubDetail: Detail[];
    eCap: number;
    status: number;  // 0 Pending 1 Approve 2 Reject


    createdAt: number;
    expiredAt: number;
    updatedAt: number;

}
