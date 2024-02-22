import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class SpotifyAPIService {

    private HttpClient = inject(HttpClient)
 private urlApi: string = " http://localhost:4001/api"




    constructor() { }


     postuser(datauser:any){
      return this.HttpClient.post(`${this.urlApi}/create-user`, datauser)
  }


  putuser(userId:string, datauser:any){
    return this.HttpClient.put(`${this.urlApi}/find-user/${userId}`, datauser)
}

    estaLogueado() : boolean{
        let estado = (sessionStorage.getItem('token')) ? true : false
        return estado
    }

    postIngresoUsuario(dataLogin:any){
        return this.HttpClient.post(`${this.urlApi}/ingreso`, dataLogin)
    }




  }



