import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class SpotifyAPIService {

  private HttpClient = inject(HttpClient)
  private urlApi: string = " http://localhost:4001/api"




  constructor(private router: Router) { }
  getUsers() {
    const headers = new HttpHeaders().set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2Q1N2I2YjVhZjY4NjJhY2QzOWRjMSIsInJvbCI6ImFkbWluIiwiaWF0IjoxNzA4OTkyOTYzLCJleHAiOjE3MDg5OTY1NjN9.IGwkzcBNR3Q3mNrRfxsUmS2ghCafp_DJuQWWVC6EDoo')
    return this.HttpClient.get(`${this.urlApi}/find-users`, { headers })
  }

  getUser(iduser: string) {
    return this.HttpClient.get(`${this.urlApi}/find-song${iduser}`)
  }

  postuser(datauser: any) {
    return this.HttpClient.post(`${this.urlApi}/create-user`, datauser)
  }

  deletuser(iduser: string) {
    return this.HttpClient.delete(`${this.urlApi}/delete-song/${iduser}`)
  }

  putuser(userId: string, datauser: any) {
    return this.HttpClient.put(`${this.urlApi}/find-user/${userId}`, datauser)
  }

  estaLogueado(): boolean {
    let estado = (sessionStorage.getItem('token')) ? true : false
    return estado
  }

  postIngresoUsuario(dataLogin: any) {
    return this.HttpClient.post(`${this.urlApi}/ingreso`, dataLogin)
  }

  logout(): any {
    console.log('Llamando al método de logout');
    sessionStorage.removeItem('token');
  }
}



