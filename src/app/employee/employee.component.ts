import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
  }

  get employees() {
    return this.employeesService.getEmployeeById();
    

  }

}
