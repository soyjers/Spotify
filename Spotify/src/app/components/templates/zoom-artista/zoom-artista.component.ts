import { CommonModule } from '@angular/common'; 
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-zoom-artista',
  standalone: true,
  imports: 
  [
    CommonModule
  ],
  templateUrl: './zoom-artista.component.html',
  styleUrl: './zoom-artista.component.css'
})
export class ZoomArtistaComponent {
  @Input() imagenCancion!: string
  @Input() cantante!: string | number
  @Input() nombreCancion!: string
}
