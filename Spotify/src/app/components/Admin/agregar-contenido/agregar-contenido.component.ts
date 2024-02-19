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
  regexNumericos = /^[0-9]+$/
  regexUrl = /^https?:\/\/\w+(\.\w+)+(\/[a-zA-Z0-9_.~-]+)*(\/[a-zA-Z0-9_.~-]+\.[a-zA-Z]+)?$/

  private JgtsService = inject(JgtsAPIService)

  constructor(private fb: FormBuilder, private apiService: JgtsAPIService) {
    this.formSong = this.fb.group({
      name: ['', Validators.required],
      // image: [''],
      // file: [''],
      year: ['', Validators.required],
      artistId: ['', Validators.required],
      albumId: [''],
    });
  }


  submitForm(): void {
    if (this.formSong.value) {
      console.log("Entro a crear")
      this.JgtsService.postCancion(this.formSong.value).subscribe(
        respuestaAPI => {
          alert('Producto guardado correctamente');
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
}
