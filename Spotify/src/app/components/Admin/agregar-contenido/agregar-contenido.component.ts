import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { JgtsAPIService } from '../../../components/service/jgts-api.service'



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

  private cancionesServices = inject(JgtsAPIService)


  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.formSong = this.fb.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required, Validators.pattern(this.regexUrl)]],
      file: ['', [Validators.required]],
      year: ['', [Validators.required, Validators.pattern(this.regexNumericos)]],
      artistId: ['', [Validators.required, Validators.pattern(this.regexNumericos)]],
      albumId: ['', [Validators.required]],
      // genre: ['', [Validators.required, Validators.pattern(this.regexNumericos)]],
    })
  }




  submitForm() {
    this.cancionesServices.postCancion(this.formSong.value).subscribe(respuestaAPI => {
      alert('producto guardado');
    })
  }
}
