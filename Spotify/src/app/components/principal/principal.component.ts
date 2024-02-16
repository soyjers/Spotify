import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MusicaGrillaComponent } from '../templates/musica-grilla/musica-grilla.component';
import { JgtsAPIService } from '../../../app/components/service/jgts-api.service'
@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MusicaGrillaComponent
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  constructor(private router: Router) { }




  cancionesData = signal<any>([])
  private cancionesService = inject(JgtsAPIService)

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
  }


}
//   productosData = signal<any>([])
//   private productosServices = inject(apis_Spotify)

//   ngOnInit(){
//       this.productosServices.getProductos().subscribe({
//           next: (productos) => {
//               this.productosData.set(productos)
//               console.log(this.productosData());

//           },
//           error: (err) => {
//               console.log(err);
//           }
//       })
//   }

//   changeCategoria(event: Event){
//       const valorInput = event.target as HTMLInputElement
//       console.log(valorInput.value);
//       this.productosServices.postProductosXCategoria(valorInput.value).subscribe({
//           next: (productos) => {
//               this.productosData.set(productos)
//               console.log("-----------> "+this.productosData());

//           },
//           error: (err) => {
//               console.log(err);
//           }
//       })
//   }


//   productoDesdeMiHijo(event: string){
//       console.log("Alumbrame bien chingada madre")
//       console.log(event);
//   }



// }
// }
