import { Ngo } from "./ngo";

export interface DonateInfo{
    ngosInfo:Ngo[];
    ngoPickUp:boolean;
    preferredTime:string;
    status:string; // open, inprogress, done
}