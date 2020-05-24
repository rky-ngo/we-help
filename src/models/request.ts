import { ItemInfo } from "./itemInfo";

export interface RequestInfo{
    id:number;
    ngoId:number;
    details:string;
    items:ItemInfo[];
    requestStatus:string; // enum StatusType: pending, partialDone, done
}