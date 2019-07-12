import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {UsersService} from "./../user.service";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users;

  login;
  constructor(  private formBuilder: FormBuilder,
    private userService: UsersService,
    private authService: AuthService,
    private router: Router) { 

      this.login = formBuilder.group({
        email: ['',[Validators.required,Validators.email]],
        password: ['',[Validators.required]],

      });

      this.users = this.userService.getAll();


    }

    

  onSubmit({email, password}) {

    const UserID = this.userService.verify(email, password);

    if (UserID !== -1) {
      window.alert('User loged in!');
      this.authService.allowUsers(UserID);
      this.router.navigate(['users']);
    } 
    else {
      window.alert('Try again');
    }

  }




  ngOnInit() {
  }
}
