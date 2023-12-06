import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
moveIcon() {
throw new Error('Method not implemented.');
}
  currentUser: any;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    console.log(this.currentUser)
  }
}
