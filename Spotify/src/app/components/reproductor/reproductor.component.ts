import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {  FormControl,FormGroup,ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'
import {  JgtsAPIService } from "../service/jgts-api.service";

@Component({
  selector: 'app-reproductor',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './reproductor.component.html',
    styleUrl: './reproductor.component.css'
})
export class ReproductorComponent {

  favorite: FormGroup;

  private favoriteService = inject(JgtsAPIService)


  inputHiddenID = new FormControl()



  iconPlay: string = "assets/img/reproductor/play.svg"
  imgCancion: string = "assets/img/reproductor/IconDisc.png"
  artista: string = "Sin Definir"
  nombreCancion: string = "Esperando para Reproducir"
  dataSongs: any = [
    { src: "assets/songs/eternity-extended-mix.mp3", img: "assets/img/songs/anyma.jpg", nombre: "Eternity", artista: "Anyma" }
  ]

  audioCancion() {
    let audio = new Audio(this.dataSongs[0].src)
    audio.play()
    this.iconPlay = "assets/img/reproductor/pause.svg"
    this.imgCancion = this.dataSongs[0].img
    this.artista = this.dataSongs[0].artista
    this.nombreCancion = this.dataSongs[0].nombre
  }
  constructor(private fb: FormBuilder) {
    this.favorite = this.fb.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      file: ['', [Validators.required]],
      year: ['', [Validators.required]],
      artistId: ['', [Validators.required]],
      albumId: ['', [Validators.required]],



    })
  }
  ngOnChanges(): void {
  }
  submitForm() {
      console.log(this.inputHiddenID.value);
      if (this.inputHiddenID.value == null || this.inputHiddenID.value == '') {
          console.log("Entro en crear");
          this.favoriteService.postfavorite(this.favorite.value).subscribe(respuestaAPI => {
              Swal.fire({
                  title: "favorito creado correctamente! ",
                  icon: "success"
              });
          })
      } else {
          console.log("Entro en actualizar");
          this.favoriteService.putfavorite(this.inputHiddenID.value, this.favorite.value).subscribe(respuestaAPI => {
              Swal.fire({
                  title: "favorito actualizado correctamente!",
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
