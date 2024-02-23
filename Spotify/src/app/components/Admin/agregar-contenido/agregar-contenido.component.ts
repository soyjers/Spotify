import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { JgtsAPIService } from '../../service/jgts-api.service';



@Component({
  selector: 'app-agregar-contenido',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './agregar-contenido.component.html',
  styleUrl: './agregar-contenido.component.css'
})
export class AgregarContenidoComponent {
  formSong: FormGroup;
  formAlbum: FormGroup;
  formArtist: FormGroup;


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

    this.formAlbum = this.fb.group({
      albumId: [''],
      year: [''],
      artistId: [''],
      image: [''],
    });

    this.formArtist = this.fb.group({
      artistId: ['', Validators.required],
      image: [''],

    });

  }

  /* parte para poder guardar la ruta de la imagen y el audio de una cancion en mongo */
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

  /* ------------------------------------------------------------------------------------------------------------------------- */
  submitSongForm(): void {
    if (this.formSong.value) {
      console.log("Entro a crear")


      let { name, image, file, year, artistId, albumId } = this.formSong.value
      const formDataSong = new FormData()

      formDataSong.append("name", name)
      formDataSong.append("image", image)
      formDataSong.append("file", file)
      formDataSong.append("year", year)
      formDataSong.append("artistId", artistId)
      formDataSong.append("albumId", albumId)


      this.JgtsService.postCancion(formDataSong).subscribe(
        respuestaAPI => {
          alert('Cancion guardada correctamente');

          this.formSong.reset(); // Limpiar el formulario después de guardar
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

  /* -------------------------------------------------------------------------------------------------------------------------- */
  submitAlbumForm(): void {
    if (this.formAlbum.value) {
      console.log("Entro a crear")


      let { image, year, artistId, albumId } = this.formAlbum.value
      const formDataAlbum = new FormData()

      formDataAlbum.append("albumId", albumId)
      formDataAlbum.append("year", year)
      formDataAlbum.append("artistId", artistId)
      formDataAlbum.append("image", image)


      this.JgtsService.postAlbum(formDataAlbum).subscribe(
        respuestaAPI => {
          alert('Album guardado correctamente');

          //this.formSong.reset(); // Limpiar el formulario después de guardar
        },
        (error) => {
          console.error('Error al guardar el album:', error);
          alert('Error al guardar el album');
        }
      );
    } else {
      alert('Por favor, complete todos los campos obligatorios.');
    }
  }

  /* ------------------------------------------------------------------------------------------------------------------------- */

  submitArtistForm(): void {
    if (this.formSong.value) {
      console.log("Entro a crear")


      let { name, image, file, year, artistId, albumId } = this.formSong.value
      const formDataArtist = new FormData()

      formDataArtist.append("artistId", artistId)
      formDataArtist.append("image", image)



      this.JgtsService.postCancion(formDataArtist).subscribe(
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

}
