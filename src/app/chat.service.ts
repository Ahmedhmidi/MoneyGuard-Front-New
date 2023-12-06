import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatVisibleSubject = new BehaviorSubject<boolean>(false);
  chatVisible$ = this.chatVisibleSubject.asObservable();

  constructor() {}

  toggleChat() {
    this.chatVisibleSubject.next(!this.chatVisibleSubject.value);
  }
}
