import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { SpotifyAPIService } from '../../../components/services/spotify-api.service';
import Swal from 'sweetalert2'


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
  formSong: FormGroup
  regexNumericos = /^[0-9]+$/
  regexUrl = /^https?:\/\/\w+(\.\w+)+(\/[a-zA-Z0-9_.~-]+)*(\/[a-zA-Z0-9_.~-]+\.[a-zA-Z]+)?$/
  regexString = /^[A-Z]+$/i

  private songServices = inject(SpotifyAPIService)


  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.formSong = this.fb.group({
      imagen: ['', [Validators.required, Validators.pattern(this.regexUrl)]],
      nombreArtista: ['', [Validators.required, Validators.pattern(this.regexNumericos)]],
      nombreAlbum: ['', [Validators.required]],
      nombreCancion: ['', [Validators.required]],
      cancion: ['', [Validators.required, Validators.pattern(this.regexNumericos)]],
      año: ['', [Validators.required, Validators.minLength(15)]],
    })
  }

}
