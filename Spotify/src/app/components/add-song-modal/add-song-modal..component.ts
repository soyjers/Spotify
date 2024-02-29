import { Component ,NgModule } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-song-modal.',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-song-modal..component.html',
  styleUrl: './add-song-modal..component.css'
})
export class AddSongModalComponent {

  selectedPlaylist: string = '';

  constructor(public dialogRef: MatDialogRef<AddSongModalComponent>) { }

  save(): void {
    this.dialogRef.close(this.selectedPlaylist);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
