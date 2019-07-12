import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees$;
  employee;

  constructor(private employeesService: EmployeesService, private router: Router, private activatedRoute: ActivatedRoute) {
    
    this.activatedRoute.paramMap.subscribe(value => {
      const employeeId = +value.get('id');
      this.employeesService.getEmployeeById(employeeId).subscribe(employee => {
        this.employee = employee;
          if (!this.employee) {
            router.navigate(['error']);
          }
        });
      });
    }

  ngOnInit() {
    this.employees$ = this.employeesService.getEmployees();
  }

}
