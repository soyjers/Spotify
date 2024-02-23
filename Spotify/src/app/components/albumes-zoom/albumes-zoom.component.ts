import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JgtsAPIService } from '../service/jgts-api.service';
import { ZoomComponent } from '../templates/zoom/zoom.component';
import { RouterLink, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-albumes-zoom',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ZoomComponent
  ],
  templateUrl: './albumes-zoom.component.html',
  styleUrl: './albumes-zoom.component.css'
})
export class AlbumesZoomComponent {
  idAlbumUrl:string | null
  



  nombreAlbum!:string 
  imgAlbum!:string
  cantante!:string




  constructor(private paramsRuta:ActivatedRoute){

    this.idAlbumUrl = this.paramsRuta.snapshot.paramMap.get('idAlbum')
    console.log(this.idAlbumUrl);
    
  }
  albumesData = signal<any>([])
  private albumesService = inject(JgtsAPIService)

  ngOnInit(){

    this.albumesService.getAlbum(this.idAlbumUrl).subscribe({
      next: (album:any) => {
        this.albumesData.set(album)

        this.nombreAlbum = album.albumId
        this.imgAlbum = album.image
        this.cantante=album.artistId

      },
      error: (err) => {
        console.log(err);
      }
    })


    

    
  }

  
}
