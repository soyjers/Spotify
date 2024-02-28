import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {  SpotifyAPIService } from "../service/spotify-api.service";

@Component({
  selector: 'app-barralateral',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './barralateral.component.html',
  styleUrl: './barralateral.component.css'
})
export class BarralateralComponent {

  constructor(private spotifyapiservice: SpotifyAPIService){}
  cerrar(): void {
    // Llama al método de logout en el servicio de autenticación
    this.spotifyapiservice.logout();
  }
}
