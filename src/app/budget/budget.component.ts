import { Component, OnInit } from '@angular/core';
import { Budget } from '../models/Budget';
import { BudgetService } from '../budget.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  
  currentUser: any;
  userBudget: Budget = new Budget();
  budgets: Budget[] = [];

  constructor(private budgetService: BudgetService, private storageService: StorageService) {} // Inject the BudgetService

  ngOnInit() {
    this.currentUser = this.storageService.getUser();
    this.loadUserBudget(this.currentUser.id);
  }

  loadUserBudget(id : number) {
    this.budgetService.getBudgetsByProviderIdV1(id).subscribe((data: Budget) => {
      this.userBudget = data;
    });
  }

  addBudget() {
    console.log(this.currentUser.id)
    console.log(this.userBudget)
    this.budgetService.createBudget(this.userBudget,this.currentUser.id).subscribe(() => {
      this.loadUserBudget(this.currentUser.id);
    });
  }

}
