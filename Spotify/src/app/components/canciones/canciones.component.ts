import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-canciones',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.css'
})
export class CancionesComponent {

}
