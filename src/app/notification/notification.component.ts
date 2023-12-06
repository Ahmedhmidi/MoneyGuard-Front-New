import { Component, OnInit } from '@angular/core';
import { NotificationService, Notification } from '../_services/notification.service';
import { StorageService } from '../_services/storage.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];
  currentUser: any;

  constructor(private notificationService: NotificationService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.getNotifications();
  }

  getNotifications(): void {
    this.currentUser = this.storageService.getUser();
    // get the provider ID from the authentication service or another source
    this.notificationService.getNotificationsForProvider(this.currentUser.id)
      .subscribe(notifications => {
        // Sort notifications in descending order by ID
        this.notifications = notifications.sort((a: Notification, b: Notification) => {
          return b.id - a.id;
        });
      });
  }
  
  deleteNotification(notificationId: number): void {
    this.notificationService.deleteNotification(notificationId)
      .subscribe(() => {
        // Remove the deleted notification from the list
        this.notifications = this.notifications.filter(notification => notification.id !== notificationId);
      });
  }
}
