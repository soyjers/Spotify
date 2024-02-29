import { CommonModule } from '@angular/common';
import { Component, Input,NgModule } from '@angular/core';
import {  JgtsAPIService } from "../../service/jgts-api.service";
import { AddSongModalComponent } from '../../add-song-modal/add-song-modal..component';
import Swal from 'sweetalert2'
import { MatDialog } from '@angular/material/dialog';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-canciones-grilla',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './canciones-grilla.component.html',
  styleUrl: './canciones-grilla.component.css'
})
export class CancionesGrillaComponent {
  @Input() imagenCancion!: string
  @Input() cancion!: string | number
  @Input() cantante!: string | number
  @Input() album!: string

  constructor(public dialog: MatDialog, private musicService: JgtsAPIService) { }
  songs: any[] = []; // Definición de la propiedad songs

  openAddSongModal(): void {
    const dialogRef = this.dialog.open(AddSongModalComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const userId = 'your_user_id'; // Obtén el ID del usuario de tu sistema de autenticación
        this.musicService.addToFavorites(userId, result).subscribe(
          response => {
            console.log(response.message);
            // Aquí podrías mostrar un mensaje de éxito al usuario
          },
          error => {
            console.error(error);
            // Aquí podrías mostrar un mensaje de error al usuario
          }
        );
      }
    });
  }
}















          // Swal.fire({
          //   title: "cancion agregada a tu playlist correctamente! ",
          //   icon: "success"
          // });
