import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../models/Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

 // addProjectToEmployeeURL : string;
    getCategoriesURL : string;
    addCategoriesURL : string;
    updateCategoriesUrl : string;
    deleteCategoriesUrl : string;
    constructor(private http : HttpClient) {

      this.getCategoriesURL = 'http://localhost:8082/api/categories/all';
      this.addCategoriesURL = 'http://localhost:8082/api/categories/add';
      this.updateCategoriesUrl = 'http://localhost:8082/api/categories/update';
      this.deleteCategoriesUrl = 'http://localhost:8082/api/categories/delete';

    }

   /* addProjecttoEmployee(id : number, project : Project): Observable<Project> {
        return this.http.post<Project>(this.addProjectToEmployeeURL+'/'+id,project);
    }
    */

    addCategorie( categorie : Categorie): Observable<Categorie> {
      return this.http.post<Categorie>(this.addCategoriesURL,categorie);
    }

    getAllCategories(): Observable<Categorie[]>{
        return this.http.get<Categorie[]>(this.getCategoriesURL);
    }


    updateCategorie(categorie :Categorie) : Observable<Categorie>{
        return this.http.put<Categorie>(this.updateCategoriesUrl, categorie);
    }

    deleteCategorie(categorie : Categorie) : Observable<Categorie> {
        return this.http.delete<Categorie>(this.deleteCategoriesUrl+'/'+categorie.id);
    }

}
