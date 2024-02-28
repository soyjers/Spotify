import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-musica-grilla',
  standalone: true,
  imports: [],
  templateUrl: './musica-grilla.component.html',
  styleUrl: './musica-grilla.component.css'
})
export class MusicaGrillaComponent {
  @Input() imagenCancion!: string
  @Input() cancion!: string | number
  @Input() cantante!: string | number
  @Input()album!:string
}
