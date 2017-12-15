
export enum STATUS {
    signIn,
    checkIn,
    cancel

}

export class eSign {
    _id : string;
    uid : string;
    status : STATUS;
}
    