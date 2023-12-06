import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderApplicationService {
  private apiUrl = 'http://localhost:8082/api/auth';

  constructor(private http: HttpClient) { }

  submitApplication(applicationData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/provider-application`, applicationData);
  }

  getAllApplications(): Observable<any> {
    return this.http.get(`http://localhost:8082/api/applications`);
  }

  reviewApplication(applicationId: string, reviewData: any): Observable<any> {
    return this.http.put(`http://localhost:8082/api/applications/${applicationId}/review`, reviewData);
  }
  
}
