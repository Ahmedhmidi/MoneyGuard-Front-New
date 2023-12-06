import { Component, OnInit } from '@angular/core';
import { SolutionService } from '../_services/Solution.service';
import { StorageService } from '../_services/storage.service';
import { User } from '../models/user';
import { Dispense } from '../models/Dispense';

@Component({
  selector: 'app-user-solutions',
  templateUrl: './ResponsibleReclamationsComponent.html',
  styleUrls: ['./ResponsibleReclamationsComponent.css']
})
export class ResponsibleReclamationsComponent implements OnInit {

  Dispenses: Dispense[] = [];
  currentUser?: User;

  constructor(private solutionService: SolutionService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.solutionService.getAllReclamations().subscribe((data: Dispense[]) => {
      this.Dispenses = data;
    });
    this.solutionService.getReclamationsByProviderIdV1(Number(this.currentUser?.id)).subscribe((data: Dispense[]) => {
      this.Dispenses = data;
    });
  }

}
