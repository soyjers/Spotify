import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-albumes-zoom',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './albumes-zoom.component.html',
  styleUrl: './albumes-zoom.component.css'
})
export class AlbumesZoomComponent {

}
