import { Component } from '@angular/core';
import { StorageService } from './_services/storage.service';
import { AuthService } from './_services/auth.service';
import { Notification, NotificationService } from './_services/notification.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
openChat() {
throw new Error('Method not implemented.');
}
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showFinancialBoard = false;
  username?: string;
  count : number = 0;
  notifications: Notification[] = [];
  currentUser : any;
  chatService: any;
  constructor(private storageService: StorageService, private authService: AuthService, private notificationService: NotificationService) { }

  async ngOnInit(): Promise<void> {

   this.getNotifications();
    let i:number = 0;
    for(let elt in this.notifications){  i  ++}
    console.log(i, this.notifications);
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      // this.notifications = user.no


      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showFinancialBoard = this.roles.includes('ROLE_Financial');
      this.username = user.username;
    }
    
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
  getNotifications(): void {
    this.currentUser = this.storageService.getUser();
    // get the provider ID from the authentication service or another source
    this.notificationService.getNotificationsForProvider(this.currentUser.id)
      .subscribe(notifications => this.notifications = notifications
        );
  }
}
