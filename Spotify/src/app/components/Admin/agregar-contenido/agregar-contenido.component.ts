<<<<<<< HEAD
import { Component, inject } from '@angular/core';
// import {  SpotifyAPIService } from "../services/spotifyservice-api.";
import { RouterLink } from '@angular/router';
=======
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { JgtsAPIService } from '../../service/jgts-api.service';


>>>>>>> Jers

@Component({
  selector: 'app-agregar-contenido',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterLink],
=======
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
>>>>>>> Jers
  templateUrl: './agregar-contenido.component.html',
  styleUrl: './agregar-contenido.component.css'
})
export class AgregarContenidoComponent {
<<<<<<< HEAD
  // private spotifyService = inject(SpotifyAPIService)
  // ingreso:boolean = false
  // ngOnInit(){
  //   this.ingreso = this.spotifyService.estaLogueado()
  //      }
=======
  formSong: FormGroup;
  regexNumericos = /^[0-9]+$/
  regexUrl = /^https?:\/\/\w+(\.\w+)+(\/[a-zA-Z0-9_.~-]+)*(\/[a-zA-Z0-9_.~-]+\.[a-zA-Z]+)?$/

  private JgtsService = inject(JgtsAPIService)

  constructor(private fb: FormBuilder, private apiService: JgtsAPIService) {
    this.formSong = this.fb.group({
      name: ['', Validators.required],
      image: [''],
      file: [''],
      year: ['', Validators.required],
      artistId: ['', Validators.required],
      albumId: [''],
    });
  }

  addFileSong(event: any, tipo: string = "img") {
    switch (tipo) {
      case "img":
        if (event.target.files.length > 0) {
          const fileImg = event.target.files[0]
          this.formSong.get("image")!.setValue(fileImg)
        }
        break;
      default:
        if (event.target.files.length > 0) {
          const fileSong = event.target.files[0]
          this.formSong.get("file")!.setValue(fileSong)
        }
        break;
    }
  }


  submitForm(): void {
    if (this.formSong.value) {
      console.log("Entro a crear")

      
      let {name, image, file, year, artistId, albumId } = this.formSong.value
      const formDataSong = new FormData()

      formDataSong.append("name", name)
      formDataSong.append("image", image)
      formDataSong.append("file", file)
      formDataSong.append("year", year)
      formDataSong.append("artistId", artistId)
      formDataSong.append("albumId", albumId)

      

      this.JgtsService.postCancion(formDataSong).subscribe(
        respuestaAPI => {
          alert('Producto guardado correctamente');

          //this.formSong.reset(); // Limpiar el formulario después de guardar
        },
        (error) => {
          console.error('Error al guardar el producto:', error);
          alert('Error al guardar el producto');
        }
      );
    } else {
      alert('Por favor, complete todos los campos obligatorios.');
    }
  }
>>>>>>> Jers
}
