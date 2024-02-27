import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import {  SpotifyAPIService } from "../service/spotify-api.service";

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

ingreso:boolean = false

constructor(private router: Router,private spotifyapiservice: SpotifyAPIService ) { }

cerrar(): void {
  this.spotifyapiservice.logout();
}

ngOnInit(){
  this.ingreso =this.spotifyService.estaLogueado()


     }

}

