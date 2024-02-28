import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { SpotifyAPIService } from "../service/spotify-api.service";
import Swal from 'sweetalert2'
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})
export class RegistrarseComponent {
  userForm: FormGroup;
  regexcorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  private usuariosServices = inject(SpotifyAPIService)


  inputHiddenID = new FormControl()

  constructor(private fb: FormBuilder, private router: Router) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.regexcorreo)]],
      password: ['', [Validators.required]]
    })

  }
  ngOnChanges(): void {
  }

  ngOnInit() {
    if (sessionStorage.getItem("token") != null) {
      this.router.navigate(['/principal'])
    }
  }


  submitForm() {
    console.log(this.inputHiddenID.value);
    if (this.inputHiddenID.value == null || this.inputHiddenID.value == '') {
      console.log("Entro en crear");
      this.usuariosServices.postuser(this.userForm.value).subscribe(respuestaAPI => {
        Swal.fire({
          title: "usuario creado correctamente! ",
          icon: "success"
        });
      })
    } else {
      console.log("Entro en actualizar");
      this.usuariosServices.putuser(this.inputHiddenID.value, this.userForm.value).subscribe(respuestaAPI => {
        Swal.fire({
          title: "usuario actualizado correctamente!",
          icon: "success"
        });
      })
    }
    // this.consultarProductos()
    setTimeout(() => {
      location.reload()
    }, 2000);
  }

}


// async onSubmit(){
//  const response = await this.usuariosServices.register(this.userForm.value)
//  console.log(response)
// }
//  ngOnInit() {
//     if (sessionStorage.getItem("token") != null) {
//       this.router.navigate(['/principal'])
// }
//   }















// constructor(private fb: FormBuilder){
//   this.contactoForm = this.fb.group({
//     contraseña: ["",[Validators.required,Validators.minLength(6)]],
//     Correo_Electronico: ["",[Validators.required,Validators.pattern(this.regexAlfabetico)]],
//   })
// }



//   constructor(private router: Router){}
//   ngOnInit() {
//     if (sessionStorage.getItem("token") != null) {
//       this.router.navigate(['/principal'])

// }
// }

// registroUsuario(){
//   let email = this.inputEmail.value
//   let password = this.inputPassword.value
//   let username = this.inputusername.value
//   this.usuariosServices.postRegisterUsuario({email, password, username}).subscribe(data => {
//     console.log(data)
//     let dataApi:any = data
//     sessionStorage.setItem('token', dataApi.token)
//     location.reload()
//   }, err => {
//     console.log(err)
//   })
// }
























