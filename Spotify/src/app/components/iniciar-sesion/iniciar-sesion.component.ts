import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

<<<<<<< HEAD
import {  SpotifyAPIService } from "../services/spotify-api.service";


=======
>>>>>>> Jers
@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  constructor(private router: Router) { }

<<<<<<< HEAD
  inputEmail = new FormControl
  inputPassword = new FormControl
  private usuariosServices = inject(SpotifyAPIService)

  ingresoUsuario(){
    let email = this.inputEmail.value
    let password = this.inputPassword.value
    this.usuariosServices.postIngresoUsuario({email, password}).subscribe(data => {
      console.log(data)
      let dataApi:any = data
      sessionStorage.setItem('token', dataApi.token)
      location.reload()
    }, err => {
      console.log(err)
    })
  }

  constructor(private router: Router){}
=======
>>>>>>> Jers
  ngOnInit() {
    if (sessionStorage.getItem("token") != null) {
      this.router.navigate(['/principal'])

<<<<<<< HEAD
}
}

}
=======
    }
  }
}
>>>>>>> Jers
