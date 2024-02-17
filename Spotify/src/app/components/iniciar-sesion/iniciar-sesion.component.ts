import { CommonModule } from '@angular/common';

import { Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { SpotifyAPIService } from "../services/spotify-api.service";

// import { Iestudaintes } from "../../models/estudiantes.model";

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

  ingresoUsuario() {
    let email = this.inputEmail.value
    let password = this.inputPassword.value
    this.usuariosServices.postIngresoUsuario({ email, password }).subscribe(data => {
      console.log(data)
      // sessionStorage.setItem('token', data.token)
    }, err => {
      console.log(err)
    })
  }

  constructor(private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem("token") != null) {
      this.router.navigate(['/principal'])

    }
  }
}
