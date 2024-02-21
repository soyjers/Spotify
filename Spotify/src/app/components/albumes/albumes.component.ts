import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { JgtsAPIService } from '../service/jgts-api.service';

@Component({
  selector: 'app-albumes',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './albumes.component.html',
  styleUrl: './albumes.component.css'
})
export class AlbumesComponent {


  cancionesData = signal<any>([])
  private cancionesService = inject(JgtsAPIService)

  albumesData = signal<any>([])
  private albumesService = inject(JgtsAPIService)

  constructor(private router: Router) { }


  ngOnInit() {

    if (sessionStorage.getItem("token") == null) {
      this.router.navigate(['/'])
    }





    this.cancionesService.getCanciones().subscribe({
      next: (canciones) => {
        this.cancionesData.set(canciones)
        console.log(this.cancionesData());

      },
      error: (err) => {
        console.log(err);
      }
    })


    this.albumesService.getAlbumes().subscribe({
      next: (albumes) => {
        this.albumesData.set(albumes)
        console.log(this.albumesData());

      },
      error: (err) => {
        console.log(err);
      }
    })





  }
}