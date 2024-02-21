import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpotifyAPIService {

    private HttpClient = inject(HttpClient)
    private urlApi: string;
    private urlApi1: string ;



    constructor() {
this.urlApi1 = 'http://localhost:4200'
this.urlApi = 'http://localhost:4001/api'
     }



     postuser(dataUser:any){
      return this.HttpClient.post(`${this.urlApi}/create-user`, dataUser)
  }


  putuser(userId:string, dataUser:any){
    return this.HttpClient.put(`${this.urlApi}/find-user/${userId}`, dataUser)
}

    estaLogueado() : boolean{
        let estado = (sessionStorage.getItem('token')) ? true : false
        return estado
    }

    postIngresoUsuario(dataLogin:any){
        return this.HttpClient.post(`${this.urlApi}/ingreso`, dataLogin)
    }

  //   register(firstValueFrom:any){
  //     return this.HttpClient.post<any>(`${this.urlApi1}/register`, firstValueFrom)
  // }


    // register(formvalue: any){
    //   return firstValueFrom(
    //     this.HttpClient.post<any>(`${this.urlApi}/create-user`, formvalue)
    //   )
    //   }

  }



