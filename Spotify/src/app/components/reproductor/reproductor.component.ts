import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-reproductor',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './reproductor.component.html',
  styleUrl: './reproductor.component.css'
})
export class ReproductorComponent {

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
}