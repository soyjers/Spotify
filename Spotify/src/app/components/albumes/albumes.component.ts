import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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

}
