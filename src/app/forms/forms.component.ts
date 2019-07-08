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
            email: ['',[Validators.required]],
            password: ['',[Validators.required]],
            confPassword: ['',[Validators.required]],
            validator: this.MustMatch('password','confPassword')

        });
    }


    MustMatch(pass:string|number, confPassword:string|number){
        return pass === confPassword;
    }
    onSubmit(value) {
        
        this.register.push(value);
    }

    resetForm() {
        this.register.reset();
    }

    forbiddenName() {
        return (formControl) => {
            return formControl.value === 'Roman' ? { forbidden: { invalid: true } } : null;
        }
    }

    get name() {
        return this.register.get('name') as FormControl;
    }

    ngOnInit() {  }
    
}