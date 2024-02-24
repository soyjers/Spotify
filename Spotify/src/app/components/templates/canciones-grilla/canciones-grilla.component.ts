import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-canciones-grilla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canciones-grilla.component.html',
  styleUrl: './canciones-grilla.component.css'
})
export class CancionesGrillaComponent {
  @Input() imagenCancion!: string
  @Input() cancion!: string | number
  @Input() cantante!: string | number
  @Input() album!: string

}
