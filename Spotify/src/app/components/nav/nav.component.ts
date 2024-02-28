import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, Router, Route } from '@angular/router';
import { SpotifyAPIService } from "../service/spotify-api.service";
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})


export class NavComponent {

  private spotifyService = inject(SpotifyAPIService)
  inputEmail = new FormControl
  inputPassword = new FormControl
  ingreso: boolean = false


  // ngOnInit(){
  //   this.ingreso =this.spotifyService.estaLogueado()
  //      }

  cerrarSesion(): void {
    sessionStorage.removeItem('token');
    location.reload()
  }

  constructor(private router: Router) { }
  ngOnInit() {
    if (sessionStorage.getItem("token") != null) {
      this.router.navigate(['/registrarse'])
    }
  }
}
