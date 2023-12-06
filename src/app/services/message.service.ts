import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'http://localhost:8082/api/message'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getMessagesByUserName(username: string): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiUrl}/username/${username}`);
  }

  getMessagesByConnected(username: string): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiUrl}/getmessage/${username}`);
  }

  getUserByUserNameRecipient(providerUsername: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/username/${providerUsername}`);
  }

  getUserByUserNameSender(providerUsername: string): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiUrl}/username_sender/${providerUsername}`);
  }

  getMessages(providerId: number): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiUrl}/id/${providerId}`);
  }

  sendMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(`${this.apiUrl}/add`, message);
  }

  getCombinedMessages(senderId: number, recipientId: number): Observable<Message[]> {
    const url = `${this.apiUrl}/combined?senderId=${senderId}&recipientId=${recipientId}`;
    return this.http.get<Message[]>(url);
  }
}
