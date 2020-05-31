import { ItemInfo } from "./itemInfo";

export interface RequestInfo{
    ngoId:string;
    details:string;
    items:ItemInfo[];
    requestStatus:string; // enum StatusType: pending, partialDone, done
}