import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';

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


        this.register = formBuilder.group({

            email: ['',[Validators.required,Validators.email]],
            password: ['',[Validators.minLength(8),Validators.required,Validators.pattern(/[\w0-9]{8,}/)]],
            confPassword: ['',[Validators.minLength(8),Validators.required,Validators.pattern(/[\w0-9]{8,}/)]],
            nickname: ['',[Validators.required,Validators.pattern(/^[0-9a-zA-Z]+\-+$/)]],
            phone: ['',[Validators.required,Validators.pattern(/\+380[0-9]{9}$/)]],
            web: ['',[Validators.required,Validators.pattern(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)]],
            check: ['',[Validators.required]]

        },
        {
            validators: this.MustMatch
        });
    }


    // passwordCheck(passwrd){
    //     var letterNumber = /^[0-9a-zA-Z]+$/;
    //     return passwrd.value.match(letterNumber);
    // }
   
    // static isPassOk(passwrd){
    //     var letterNumber = /^[0-9a-zA-Z]+$/;
    //     return passwrd.value.match(letterNumber)? true : null;

    // }

    MustMatch(password) {
        if (password.get('password').value !== password.get('confPassword').value) {
            return {invalid: true};
        }
    }




    onSubmit(value) {
        
        this.register(value);
    }



    ngOnInit() {  }
    
}
