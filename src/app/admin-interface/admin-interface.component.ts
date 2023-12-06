import { Component, OnInit } from '@angular/core';
import { ProviderApplicationService } from '../_services/provider-application.service';

@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.component.html',
  styleUrls: ['./admin-interface.component.css']
})
export class AdminInterfaceComponent implements OnInit {
  applications: any[] = [];
  validStatusValues: string[] = ['PENDING', 'APPROVED', 'REJECTED'];

  constructor(private providerApplicationService: ProviderApplicationService) {}

  ngOnInit(): void {
    this.providerApplicationService.getAllApplications().subscribe(
      applications => {
        this.applications = applications.filter((app: { status: string; }) => app.status === 'PENDING');
        console.log(this.applications);
      },
      error => {
        console.error('Failed to fetch applications', error);
      }
    );
  }

  onReview(applicationId: string, reviewData: any) {

    console.log('Review Data:', reviewData); // Check the value of reviewData

    // Convert the status value to uppercase

  reviewData.status = reviewData.status.toUpperCase();

   console.log('Review Data:', reviewData); // Check the value of reviewData
    
    // Check if the reviewData.status is valid
    if (!this.validStatusValues.includes(reviewData.status)) {
      console.error('Invalid status value');
      // Handle the error here, show an error message, or perform any other necessary action
      return;
    }

    this.providerApplicationService.reviewApplication(applicationId, reviewData).subscribe(
      () => {
        // Fetch applications again to refresh the list
        this.ngOnInit();
      },
      error => {
        console.error('Failed to review application', error);
        // Handle the error here, show an error message, or perform any other necessary action
      }
    );
  }
  
  
}
