import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-reproductor',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './reproductor.component.html',
  styleUrl: './reproductor.component.css'
})
export class ReproductorComponent {

}
