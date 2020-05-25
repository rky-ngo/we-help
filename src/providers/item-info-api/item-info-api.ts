import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ItemInfoApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ItemInfoApiProvider Provider');
  }

}
