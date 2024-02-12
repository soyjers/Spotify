import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
   ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
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
