export interface ItemInfo{
    id:number;
    requestId:number;
    name:string;
    qty:number;
    category:string; // enum CategoryType: Books, Toys, Cloths, Groceries, Medicine, Home Essentials 
    itemStatus:string; // enum StatusType: pending, partialDone, done
}