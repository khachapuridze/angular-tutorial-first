import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';

interface IRegister {
  name: {
  type: string,
  required: true
  },
  salary: {
  type: number,
  required: true
  },
  age: {
  type: number,
  required: true
  }
}

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss']
})


export class EmployeeRegisterComponent implements OnInit {
  employeeRegister;
  constructor(private formBuilder: FormBuilder,
              private employeeService: EmployeesService,
              private router: Router) { 
    
    this.employeeRegister = formBuilder.group({
      name: ['',[Validators.required]],
      salary: [0,[Validators.required]],
      age: [0,[Validators.required]],

  });
  }

  ngOnInit() {
  }

  onSubmit(value) {
    this.employeeService.addToEmployes(value);
    window.alert("You susccessfuly registered Employee!");
    this.router.navigate(['employees']);
  }

}
