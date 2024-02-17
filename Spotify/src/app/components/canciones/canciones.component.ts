import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SpotifyAPIService } from "../../../app/components/services/spotify-api.service"
import { MusicaGrillaComponent } from "../../components/templates/musica-grilla/musica-grilla.component"

@Component({
    selector: 'app-canciones',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        MusicaGrillaComponent
    ],
    templateUrl: './canciones.component.html',
    styleUrl: './canciones.component.css'
})
export class CancionesComponent {
    songData = signal<any>([])
    private ServiceSong = inject(SpotifyAPIService);

    //   ngOnInit() {
    //     this.ServiceSong.findSongs().subscribe({
    //       next: (songs) => {
    //         this.songData.set(songs)
    //         console.log(this.songData());

    //       },
    //       error: (err) => {
    //         console.log(err);
    //       }
    //     })
    //   }
}
