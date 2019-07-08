import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls : ["./forms.component.scss"]
})

export class formsComponent implements OnInit{
    register;

    constructor(

        private formBuilder: FormBuilder
    ){ 


        this.register = this.formBuilder.group({

            email: ['',[Validators.required,Validators.email]],
            password: ['',[Validators.minLength(7),Validators.required,Validators.pattern(/^[0-9a-zA-Z]+$/)]],
            confPassword: ['',[Validators.minLength(7),Validators.required]],
            nickname: ['',[Validators.required]],
            phone: ['',[Validators.required]],
            web: ['',[Validators.required]],
            

        },
        {
            validator: this.MustMatch
        });
    }


    // passwordCheck(passwrd){
    //     var letterNumber = /^[0-9a-zA-Z]+$/;
    //     return passwrd.value.match(letterNumber);
    // }
   
    static isPassOk(passwrd){
        var letterNumber = /^[0-9a-zA-Z]+$/;
        return passwrd.value.match(letterNumber)? true : null;

    }

    MustMatch(password) {
        if (password.get('password').value !== password.get('confPassword').value) {
            return {invalid: true};
        }
    }

    onSubmit(value) {
        
        this.register(value);
    }

    resetForm() {
        this.register.reset();
    }

    forbiddenName() {
        return (formControl) => {
            return formControl.value === 'Roman' ? { forbidden: { invalid: true } } : null;
        }
    }

    get email() {
        return this.register.get('email') as FormControl;
    }

    ngOnInit() {  }
    
}