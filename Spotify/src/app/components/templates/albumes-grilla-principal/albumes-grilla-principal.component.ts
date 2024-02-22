import { CommonModule } from '@angular/common';

import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-albumes-grilla-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albumes-grilla-principal.component.html',
  styleUrl: './albumes-grilla-principal.component.css'
})
export class AlbumesGrillaPrincipalComponent {
  @Input() imagenAlbum!: string
  @Input() cantante!: string | number
  @Input() album!: string
}
