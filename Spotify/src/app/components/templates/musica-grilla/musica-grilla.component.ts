import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-musica-grilla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './musica-grilla.component.html',
  styleUrl: './musica-grilla.component.css'
})
export class MusicaGrillaComponent {
  @Input() imagenCancion!: string
  @Input() cantante!: string | number
  @Input() album!: string


}
