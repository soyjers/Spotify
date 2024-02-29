import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JgtsAPIService } from '../service/jgts-api.service';
import { ZoomArtistaComponent } from '../templates/zoom-artista/zoom-artista.component';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artistas-zoom',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink, 
    ZoomArtistaComponent
  ],
  templateUrl: './artistas-zoom.component.html',
  styleUrl: './artistas-zoom.component.css'
})
export class ArtistasZoomComponent {
  idArtistaUrl: string | null
  imgArtista!: string
  cantante!: string

  artistasData : any
  private servicioAPI = inject(JgtsAPIService)
  cancionesData = signal<any>([])
  albumesData = signal<any>([])
  
  constructor(private paramsRuta: ActivatedRoute){
    this.idArtistaUrl = this.paramsRuta.snapshot.paramMap.get('idArtista')
    console.log(this.idArtistaUrl);
  }



  ngOnInit() {

    this.servicioAPI.getArtista(this.idArtistaUrl).subscribe({
      next: (artista: any) => {
        this.artistasData.set(artista)

        
        this.imgArtista = artista.image
        this.cantante = artista.artistId



        this.servicioAPI.getCancionPorArtista(this.idArtistaUrl).subscribe({
          next: (canciones) => {
            console.log(canciones);

          },
          error: (err) => {
            console.log(err);
          }
        })
      },
    })

}
}
