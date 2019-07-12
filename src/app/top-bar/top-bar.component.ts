import { Component, OnInit } from "@angular/core";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls : ["./top-bar.component.scss"]
})

export class TopBarComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private router: Router
    ){ }
 

    ngOnInit() {
        
    }
    get access() {
        return this.authService.isEnabled();
    }

    logout() {

        this.authService.disallow();
        window.alert('User Logedout!');
      }
    
}