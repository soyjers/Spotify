import { CommonModule } from '@angular/common';

import { Component, inject, signal } from '@angular/core';
import { FormControl,ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import {  SpotifyAPIService } from "../service/spotify-api.service";


@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {

  inputEmail = new FormControl
  inputPassword = new FormControl
  private usuariosServices = inject(SpotifyAPIService)

  ingresoUsuario(){
    let email = this.inputEmail.value
    let password = this.inputPassword.value
    this.usuariosServices.postIngresoUsuario({email, password}).subscribe(data => {
      console.log(data)
      let dataApi:any = data
      sessionStorage.setItem('token', dataApi.token)
      location.reload()
    }, err => {
      console.log(err)
    })
  }

  constructor(private router: Router){}
  ngOninit() {
    if (sessionStorage.getItem("token") != null) {
      this.router.navigate(['/principal'])

}
}

}
