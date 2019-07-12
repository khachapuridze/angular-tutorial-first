import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import {UsersService} from "./../user.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls : ["./forms.component.scss"]
})

export class formsComponent implements OnInit{
    register;


    constructor(

        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UsersService
    ){ 


        this.register = formBuilder.group({
            name: ['',[Validators.required]],
            email: ['',[Validators.required,Validators.email]],
            password: ['',[Validators.minLength(8),Validators.required,Validators.pattern(/[\w0-9]{8,}/)]],
            confPassword: ['',[Validators.minLength(8),Validators.required,Validators.pattern(/[\w0-9]{8,}/)]],

        },
        {
            validators: this.MustMatch
        });
    }


    MustMatch(password) {
        if (password.get('password').value !== password.get('confPassword').value) {
            return {invalid: true};
        }
    }


    onSubmit(value) {
        this.userService.addToUsers(value);
        window.alert("You susccessfuly registered, Please Login! ");
        this.router.navigate(['login']);

    }



    ngOnInit() {  }
    
}
