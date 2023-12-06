import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import {Add_employeeComponent} from "./add_employee/add_employee.component";
import { FullCalendarModule } from '@fullcalendar/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';




import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SolutionComponent } from './Dispense/solution.component';
import { CommonModule } from '@angular/common';

import { SolutionFormComponent } from './Dispense-form/solution-form.component';
import { UserSolutionsComponent } from './user-dispenses/user-solutions.component';
import { AddImageComponent } from './add-image/add-image.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NotificationComponent } from './notification/notification.component';  // import MatDialogModule here

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { ChatComponent } from './chat/chat.component';
import { ResponsibleReclamationsComponent } from './Responsible_Reclamations/ResponsibleReclamationsComponent';
import { BudgetComponent } from './budget/budget.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DispenseStatisticsComponent } from './dispense-statistics/dispense-statistics.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { MessagesComponent } from './messages/messages.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    Add_employeeComponent,
    SolutionComponent,
    SolutionFormComponent,
    UserSolutionsComponent,
    AddImageComponent,
    NotificationComponent,
    AdminInterfaceComponent,
    ChatComponent,
    ResponsibleReclamationsComponent,
    BudgetComponent,
    DashboardComponent,
    DispenseStatisticsComponent,
    ChatbotComponent,
    MessagesComponent
    
  ],
    imports: [
        BrowserModule,
      FullCalendarModule,
      AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        LeafletModule,
        CommonModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule, // add MatDialogModule here
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        FontAwesomeModule
        
    ],
  entryComponents: [
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
