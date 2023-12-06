import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../models/user";
import {EmployeeService} from "../_services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  empDetail !: FormGroup;
  empObj : User = new User();
  empList : User[] = [];

  constructor(private userService: UserService , private formBuilder : FormBuilder, private empService : EmployeeService, private route : Router) { }

  ngOnInit(): void {
    this.getAllEmployee();

    this.empDetail = this.formBuilder.group({
      id : [0] ,
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



  getAllEmployee() {
    this.empService.getAllEmployee().subscribe(res=>{
      this.empList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editEmployee(emp : User) {
    this.empDetail.controls['id'].setValue(emp.id);
    this.empDetail.controls['name'].setValue(emp.name);
    this.empDetail.controls['lastname'].setValue(emp.lastname);
    this.empDetail.controls['phone'].setValue(emp.phone);
    this.empDetail.controls['username'].setValue(emp.username);
    this.empDetail.controls['email'].setValue(emp.email);
    this.empDetail.controls['password'].setValue(emp.password);
    this.empDetail.controls['jobTitle'].setValue(emp.jobTitle);
    this.empDetail.controls['grade'].setValue(emp.grade);
    this.empDetail.controls['role'].setValue(emp.role);


  }

  updateEmployee() {

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

    this.empService.updateEmployee(this.empObj).subscribe(res=>{
      console.log(res);
      this.getAllEmployee();
    },err=>{
      console.log(err);
    })

  }

  deleteEmployee(emp : User) {

    this.empService.deleteEmployee(emp).subscribe(res=>{
      console.log(res);
      alert('User deleted successfully');
      this.getAllEmployee();
    },err => {
      console.log(err);
    });

  }

  logout()  {
    this.route.navigate(["./"]).then(r => {})
  }

}
