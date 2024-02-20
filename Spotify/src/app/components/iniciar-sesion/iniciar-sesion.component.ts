import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  constructor(private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem("token") != null) {
      this.router.navigate(['/principal'])

    }
  }
}