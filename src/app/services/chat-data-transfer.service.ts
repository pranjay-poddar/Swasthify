import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatDataTransferService {

  user ! : String;
  emailId ! : String;
  constructor() { }
}
