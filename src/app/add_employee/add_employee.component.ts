import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../models/user";
import {EmployeeService} from "../_services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'add_employee',
  templateUrl: './add_employee.component.html',
  styleUrls: ['./add_employee.component.css']
})
export class Add_employeeComponent implements OnInit {
  content?: string;
  empDetail !: FormGroup;
  empObj : User = new User();
  empList : User[] = [];

  constructor(private userService: UserService , private formBuilder : FormBuilder, private empService : EmployeeService, private route : Router) { }

  ngOnInit(): void {
    this.getAllEmployee();

    this.empDetail = this.formBuilder.group({
      id : ['0'],
      name : [''],
      lastname: [''],
      birthday: [''],
      phone: [''],
      email: [''],
      username: [''],
      password: [''],
      role:['']
    });

  }

  addEmployee() {
    console.log(this.empDetail);
    this.empObj.id = this.empDetail.value.id;
    this.empObj.name = this.empDetail.value.name;
    this.empObj.lastname = this.empDetail.value.lastname;
    this.empObj.phone = this.empDetail.value.phone;
    this.empObj.email = this.empDetail.value.email;
    this.empObj.username = this.empDetail.value.username;
    this.empObj.password = this.empDetail.value.password;
    this.empObj.jobTitle = this.empDetail.value.jobTitle;
    this.empObj.grade = this.empDetail.value.grade;
    this.empObj.role = this.empDetail.value.role;

    this.empService.addEmployee(this.empObj).subscribe(res=>{
      console.log(res);
      this.getAllEmployee();
      this.route.navigate(['/admin'])
    },err=>{
      console.log(err);
    });

  }

  getAllEmployee() {
    this.empService.getAllEmployee().subscribe(res=>{
      this.empList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }
}
