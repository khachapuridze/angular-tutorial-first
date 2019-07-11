import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {UsersService} from "./../user.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login;
  constructor(  private formBuilder: FormBuilder,
    private userService: UsersService) { 

      this.login = formBuilder.group({
        email: ['',[Validators.required,Validators.email]],
        password: ['',[Validators.required]],

      })


    }

    
    onSubmit(value) {
        
      if (this.userService.geUserEmail(value)==value) {
        return true;
      }
      else {
        return false;
      }

  }




  ngOnInit() {
  }
}
