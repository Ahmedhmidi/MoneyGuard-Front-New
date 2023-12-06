import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Message } from '../models/message';
import { StorageService } from '../_services/storage.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: any;
  currentUser: any;
  user:any
  constructor(private messageService: MessageService, private storageService: StorageService) { }


  ngOnInit(): void {

    this.currentUser = this.storageService.getUser();

    // Fetch the user's message history from the service
    this.messageService.getMessagesByUserName(this.currentUser.username).subscribe((data:any) => {
      console.log('hello from message.ts', this.currentUser.username)
      this.user=data
      this.messages = data;
      console.log(this.messages)
    });
  }

}
