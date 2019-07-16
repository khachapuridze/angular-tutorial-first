import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees$;
  employee;
  editEmployeeForm;
  active = false;



  constructor(private employeesService: EmployeesService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {

    this.editEmployeeForm = formBuilder.group({
      name: ['', Validators.required],
      salary: ['', Validators.required],
      age: ['', Validators.required]
    });



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


  editEmployee(employee) {
    this.active = true;
    this.employeesService.editEmployees(this.employee.id,employee)
    .subscribe(editedemployee => {
      this.employee=editedemployee;
      this.active = false;
    });
  }
  deleteEmployee(employee){
    this.active = true;
    this.employeesService.deleteEmployee(this.employee.id,employee).subscribe(deletededemployee => {
      this.employee=deletededemployee;
      this.active = false;
    });
  }
}
