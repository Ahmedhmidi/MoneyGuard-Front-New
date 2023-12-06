import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Dispense } from '../models/Dispense';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  categoryId: number = 0;
  dispenses: Dispense[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    // Get the category ID from the route parameters
    this.categoryId = this.route.snapshot.params['id'];
    
    // Fetch the services data from the API using the category ID
    this.http.get<Dispense[]>(`http://localhost:8082/api/dispenses/all`).subscribe((data: Dispense[]) => {
      this.dispenses = data;
      console.log(this.dispenses)
    });
  }
}
