import { UserInfo } from "./userInfo";
import { LocationInfo } from "./location";
import { RequestInfo } from "./request";

export interface Ngo{
    id:number;
    name:string;
    description:string;
    phoneNumber:string;
    location:LocationInfo;
    imageName:string;
    requests:RequestInfo[];
    userInfo:UserInfo;
}