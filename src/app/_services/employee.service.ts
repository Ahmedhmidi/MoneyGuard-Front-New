import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  addEmpURL : string;
  getEmpURL : string;
  updateEmpUrl : string;
  deleteEmpUrl : string;

  constructor(private http : HttpClient) {

    this.addEmpURL = 'http://localhost:8082/api/users/add';
    this.getEmpURL = 'http://localhost:8082/api/users/all';
    this.updateEmpUrl = 'http://localhost:8082/api/users/update';
    this.deleteEmpUrl = 'http://localhost:8082/api/users/delete';

   }

   addEmployee(emp : User): Observable<User> {
     return this.http.post<User>(this.addEmpURL,emp);
   }

   getAllEmployee(): Observable<User[]>{
     return this.http.get<User[]>(this.getEmpURL);
   }

   updateEmployee(emp :User) : Observable<User>{
     return this.http.put<User>(this.updateEmpUrl, emp);
   }

   deleteEmployee(emp : User) : Observable<User> {
     return this.http.delete<User>(this.deleteEmpUrl+'/'+emp.id);
   }


}
