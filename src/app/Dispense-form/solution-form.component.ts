import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolutionService } from '../_services/Solution.service';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router'; // Import Router
import { Dispense } from '../models/Dispense';


@Component({
  selector: 'app-solution-form',
  templateUrl: './solution-form.component.html',
  styleUrls: ['./solution-form.component.css']
})
export class SolutionFormComponent implements OnInit {
addBudget() {
throw new Error('Method not implemented.');
}
  DispenseForm: FormGroup;
userBudget: any;

  constructor(private fb: FormBuilder, private solutionService: SolutionService, private storageService: StorageService,private router: Router) {
    this.DispenseForm = this.fb.group({
      amount: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      paymentMethod: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const formValue = this.DispenseForm.value;
    const dispense: Dispense = {
      amount: formValue.amount,
      date: formValue.date,
      description: formValue.description,
      paymentMethod: formValue.paymentMethod,
      providerId: this.storageService.getUser().id,
    };
    console.log('Submitting dispense:', dispense);
    this.solutionService.createDispense(dispense).subscribe((data) => {
      console.log(data)
    
      // Handle success
      this.router.navigate(['/user-solutions']); // Navigate to user-solutions route
    }, error => {
      // Handle error
      console.error('Reservation failed:', error);
    });
  }
}
