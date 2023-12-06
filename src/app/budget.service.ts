import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dispense } from './models/Dispense';
import { Budget } from './models/Budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private apiUrl = 'http://localhost:8082/api'; // replace with your own API URL

  constructor(private http: HttpClient) { }

  getAllBudgets(): Observable<Budget[]> {
    return this.http.get<Budget[]>(`${this.apiUrl}/budget/all`);
  }



  getBudgetsByProviderIdV1(id:number): Observable<Dispense> {
    return this.http.get<Dispense>(`${this.apiUrl}/budget/id/` + id + '/userId');
  }

  createBudget(budget: Budget, id:number): Observable<Dispense> {
    return this.http.post<Dispense>(`${this.apiUrl}/budget/add/` + id, budget);
  }

  getDispensesStatistics(userId: number) {
    return this.http.get(this.apiUrl+`/dispenses/statistics/${userId}`);
  }
}
