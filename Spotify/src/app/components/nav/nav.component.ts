import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {  SpotifyAPIService } from "../services/spotify-api.service";


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent {
private spotifyService = inject(SpotifyAPIService)
ingreso:boolean = false
ngOnInit(){
  this.ingreso =this.spotifyService.estaLogueado()
     }
}
