import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {
  solutionId: number = 0;
  selectedFile: File | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.solutionId = this.route.snapshot.params['sid'];
  }

  onFileChanged(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);
      this.http.post(`http://localhost:8082/api/users/${this.solutionId}/add-image`, formData).subscribe(() => {
        // Handle success
        this.router.navigate(['/user-solutions']); // Navigate to user-dispenses route
      }, error => {
        // Handle error
        console.error('dispense failed:', error);
      });
    }
  }
}
