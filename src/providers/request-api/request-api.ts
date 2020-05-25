import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RequestApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RequestApiProvider Provider');
  }

}
