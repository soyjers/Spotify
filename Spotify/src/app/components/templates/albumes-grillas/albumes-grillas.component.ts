import { CommonModule  } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-albumes-grillas',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink],
  templateUrl: './albumes-grillas.component.html',
  styleUrl: './albumes-grillas.component.css'
})
export class AlbumesGrillasComponent {
  @Input() imagenAlbum!: string
  @Input() cantante!: string
  @Input() album!: string
  @Input() albumDataID!: string
}
