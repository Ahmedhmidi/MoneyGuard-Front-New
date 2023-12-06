import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {Add_employeeComponent} from "./add_employee/add_employee.component";
import { SolutionComponent } from './Dispense/solution.component';
import { SolutionFormComponent } from './Dispense-form/solution-form.component';
import { UserSolutionsComponent } from './user-dispenses/user-solutions.component';
import { AddImageComponent } from './add-image/add-image.component';
import { NotificationComponent } from './notification/notification.component';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { ChatComponent } from './chat/chat.component';
import { ResponsibleReclamationsComponent } from './Responsible_Reclamations/ResponsibleReclamationsComponent';
import { BudgetComponent } from './budget/budget.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'add_employee', component: Add_employeeComponent },
  { path: 'form_solution', component: SolutionFormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'user-solutions', component: UserSolutionsComponent },
  { path: 'reclamations-responsible', component: ResponsibleReclamationsComponent },
  { path: 'users/:sid/add-image', component: AddImageComponent },
  { path: 'solutions/:id/services', component: SolutionComponent },
  { path: 'notifications', component: NotificationComponent },
  { path: 'chat/:providerUsername', component: ChatComponent },
  { path: 'admin_interface', component: AdminInterfaceComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'chatbot', component: ChatbotComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'notifications', component: NotificationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
