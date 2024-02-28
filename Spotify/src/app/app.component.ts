import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BarralateralComponent } from './components/barralateral/barralateral.component';
import { NavComponent } from './components/nav/nav.component';
import {FooterComponent} from './components/footer/footer.component'
import {ReproductorComponent} from './components/reproductor/reproductor.component'
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BarralateralComponent, NavComponent, FooterComponent, ReproductorComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JGTS';
  session! : boolean
  ngOnInit(){
    this.session = (sessionStorage.getItem("token") != null) ? true : false
  }
}
