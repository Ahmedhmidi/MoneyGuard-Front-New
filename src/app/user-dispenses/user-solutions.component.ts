import { Component, OnInit } from '@angular/core';
import { SolutionService } from '../_services/Solution.service';
import { StorageService } from '../_services/storage.service';
import { User } from '../models/user';
import { Dispense } from '../models/Dispense';

@Component({
  selector: 'app-user-solutions',
  templateUrl: './user-solutions.component.html',
  styleUrls: ['./user-solutions.component.css']
})
export class UserSolutionsComponent implements OnInit {

  Dispenses: Dispense[] = [];
  currentUser?: User;

  constructor(private solutionService: SolutionService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.solutionService.getReclamationsByProviderId(Number(this.currentUser?.id)).subscribe((data: Dispense[]) => {
      console.log(data)
      this.Dispenses = data;
    });
  }

}
