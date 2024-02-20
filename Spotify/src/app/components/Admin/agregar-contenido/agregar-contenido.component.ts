import { Component, inject } from '@angular/core';
// import {  SpotifyAPIService } from "../services/spotifyservice-api.";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agregar-contenido',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './agregar-contenido.component.html',
  styleUrl: './agregar-contenido.component.css'
})
export class AgregarContenidoComponent {
  // private spotifyService = inject(SpotifyAPIService)
  // ingreso:boolean = false
  // ngOnInit(){
  //   this.ingreso = this.spotifyService.estaLogueado()
  //      }
}
