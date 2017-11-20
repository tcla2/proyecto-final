import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { HttpService } from './http.service';
import { Response } from '@angular/http';

@Injectable()
export class DataService {
  private usuarios: string[] = [];
  userLogged: boolean = false;

  constructor(
    private logService: LogService,
    private httpService: HttpService) { }

  // En este metodo falta iterar sobre la lista de usuarios que se obtiene de firebase
  getUsers(emailInput,passwordInput){

    let promesa = new Promise((resolve, reject)=>{
      this.httpService.getDatos()
          .subscribe(
            (data: Response) => {
              if(emailInput == data["usuarios"]["0"]["email"] && passwordInput == data["usuarios"]["0"]["password"]){
                this.userLogged = true;
              }else{
                this.userLogged = false;
              }
              resolve({logged: this.userLogged});
            }
          )
    })

     return promesa;
  }

  getProducts(){
    let promesa = new Promise((resolve, reject)=>{
      this.httpService.getDatosProductos()
          .subscribe(
            (data: Response) => {
              resolve({products: data});
          }
        )
    })

    return promesa;
  }



}
