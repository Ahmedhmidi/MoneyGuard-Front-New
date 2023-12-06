import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../services/message.service';
import { Message } from '../models/message';
import { StorageService } from '../_services/storage.service';
import { User } from '../models/user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  providerUsername: string = "" ;
  messages: Message[] = [];
  newMessage: string = '';
  currentUser : any;
  senderIdHere:number = 0;
  provider : any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private messageService: MessageService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    // Get the provider ID from the route parameters
    this.providerUsername = this.route.snapshot.params['providerUsername'];
    this.currentUser = this.storageService.getUser()
    this.senderIdHere = this.currentUser.id

    console.log("senderId ", this.senderIdHere)

    this.messageService.getUserByUserNameRecipient(this.providerUsername).subscribe((data : User) =>{
       this.provider = data;
   

    // Fetch the messages for the chat from the API using the provider ID
    this.messageService.getUserByUserNameSender(this.providerUsername).subscribe((data: Message[]) => {
      this.messages = data;
      console.log("messages ",this.messages);
    });
  },

  (error) => {
    console.error('Error fetching provider information:', error);
    // Handle the error, e.g., display an error message or redirect the user
  });
  }

  sendMessage(): void {
    // Create a new message object
    const message: Message = {
      msg_id :1,
      recipient_id : this.provider.id,
      sender_id : this.currentUser.id,
      object: this.newMessage,
      date: new Date().toISOString(),  // Update to the current date and time
      senderUserName : '',
      recipientUserName : ''
    };

    console.log(message)

    // Send the message to the API
    this.messageService.sendMessage(message).subscribe((response: Message) => {
      // Add the sent message to the messages array
      this.messages.push(response);

      // Clear the new message input
      this.newMessage = '';
    });
  }
}
