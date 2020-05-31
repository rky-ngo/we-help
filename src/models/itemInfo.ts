export interface ItemInfo{
    id:number;
    name:string;
    qty:number;
    category:string; // enum CategoryType: Books, Toys, Cloths, Groceries, Medicine, Home Essentials 
    itemStatus:string; // enum StatusType: pending, partialDone, done
    imageName:string;
}