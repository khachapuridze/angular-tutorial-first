import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { data } from './currencies';

interface IEmployee {
  id: string,
  employee_name: string,
  employee_salary: string,
  employee_age: string

}

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  host = "http://dummy.restapiexample.com/api/v1";
  newEmployees= [];
  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http
    .get(`${this.host}/employees`)
    .pipe(map((employees: IEmployee[]) => {
      return employees.map(employee =>{
        return {
          id: employee.id,
          name: employee.employee_name,
          salary: employee.employee_salary,
          age: employee.employee_age
        }
      })
    }));
  }

  addToEmployes(employee: IEmployee) {
    console.log(employee);

     return this.http
     .post<IEmployee>(`${this.host}/create`, employee)
     .subscribe(employee => this.newEmployees.push(employee));
  }

  
  getEmployeeById(id) {
    return this.http
      .get(`${this.host}/employee/${id}`)
      .pipe(map((employee: IEmployee) => {
            return {
              id: employee.id,
              name: employee.employee_name,
              salary: employee.employee_salary,
              age: employee.employee_age
            }
      
      }))
  }

  editEmployees(id, employee) {
    return this.http.put(`${this.host}/update/${id}`, employee);
  }
}
