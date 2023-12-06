import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {EmailDetails} from "../models/emailDetails";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  SendEmailURL : string;


  constructor(private http : HttpClient) {

    this.SendEmailURL = 'http://localhost:8082/sendMail';
  }

  SendEmail(emailDetails : EmailDetails): Observable<EmailDetails> {
    return this.http.post<EmailDetails>(this.SendEmailURL,emailDetails);
  }
}
