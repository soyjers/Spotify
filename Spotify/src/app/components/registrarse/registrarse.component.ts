import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {  FormControl,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import {  SpotifyAPIService } from "../services/spotify-api.service";

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
  private usuariosServices = inject(SpotifyAPIService)
  userForm: FormGroup;


  constructor(){
this.userForm = new FormGroup({
   Email: new FormControl(),
  Password: new FormControl(),
  username: new FormControl()
})
}



async onSubmit(){
 const response = await this.usuariosServices.register(this.userForm.value)
 console.log(response)
}
//   ngOnInit() {
//     if (sessionStorage.getItem("token") != null) {
//       this.router.navigate(['/principal'])
// }
//   }
}















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






















  // ngOnInit(){
  //   if(sessionStorage.getItem("token") != null ) {
  //           this.router.navigate(['/principal'])

  //   }
  // }

