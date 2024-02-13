import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})
export class RegistrarseComponent {
  constructor(private router: Router){}

  ngOnInit(){
    if(sessionStorage.getItem("token") != null ) {
            this.router.navigate(['/principal'])

    }
  }
}
