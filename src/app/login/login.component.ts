import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ DataService ]
})
export class LoginComponent {
   userLogged:boolean = true;
  constructor(private logService: LogService,
              private dataService: DataService,
              private router: Router){}

  getUsers(emailInput, passwordInput){
    //si los datos son correctos
    this.dataService.getUsers(emailInput,passwordInput)
      .then(
        (data) => {
          this.userLogged = data["logged"];
          if(this.userLogged){
            this.router.navigate(['/vista-principal']);
          }
        }
      );
  }

}
