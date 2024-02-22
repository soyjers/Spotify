import { Routes } from '@angular/router';
import { IniciarSesionComponent } from '../app/components/iniciar-sesion/iniciar-sesion.component'
import { RegistrarseComponent } from "./components/registrarse/registrarse.component"
import { PrincipalComponent } from './components/principal/principal.component';
import { AgregarContenidoComponent } from './components/Admin/agregar-contenido/agregar-contenido.component'
import { MisFavoritosComponent } from './components/mis-favoritos/mis-favoritos.component'
import { CancionesComponent } from './components/canciones/canciones.component';
import { AlbumesComponent } from './components/albumes/albumes.component';
import { AlbumesZoomComponent } from './components/albumes-zoom/albumes-zoom.component';
import { error404Component } from './components/error404/error404.component';
import { autenticacionGuard } from './guards/autenticacion.guard';

export const routes: Routes = [
    { path: "", component: IniciarSesionComponent },
    { path: "registrarse", component: RegistrarseComponent },
    { path: 'principal', component: PrincipalComponent },
    { path: "AdminAddContent", component: AgregarContenidoComponent },
    { path: "MisFavoritos", component: MisFavoritosComponent },
    { path: "canciones", component: CancionesComponent },
    { path: "albumes", component: AlbumesComponent },
    { path: "zoom/:idAlbum", component: AlbumesZoomComponent },
    { path: 'principal', component: PrincipalComponent },
    { path: "AdminAddContent", canMatch: [autenticacionGuard], component: AgregarContenidoComponent },
    { path: "MisFavoritos", component: MisFavoritosComponent },
    { path: "404", component: error404Component },
    { path: '**', pathMatch: 'full', redirectTo: '404' },

]

