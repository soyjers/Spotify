import { Routes } from '@angular/router';
import { IniciarSesionComponent } from '../app/components/iniciar-sesion/iniciar-sesion.component'
import { RegistrarseComponent } from "./components/registrarse/registrarse.component"
import { PrincipalComponent } from './components/principal/principal.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { ArtistasZoomComponent } from './components/artistas-zoom/artistas-zoom.component';
import { AgregarContenidoComponent } from './components/Admin/agregar-contenido/agregar-contenido.component'
import { MisFavoritosComponent } from './components/mis-favoritos/mis-favoritos.component'
import { error404Component } from './components/error404/error404.component';
import { autenticacionGuard } from './guards/autenticacion.guard';
import { CancionesComponent } from './components/canciones/canciones.component'
import { AlbumesZoomComponent } from './components/albumes-zoom/albumes-zoom.component'
import { AlbumesComponent } from './components/albumes/albumes.component'
import { NavComponent } from './components/nav/nav.component';



export const routes: Routes = [
    {path: "", component: IniciarSesionComponent },
    {path: "registrarse", component: RegistrarseComponent},
    { path: 'principal', component: PrincipalComponent },
    { path: "AdminAddContent", component: AgregarContenidoComponent },
    { path: "canciones", component: CancionesComponent },
    { path: "albumes", component: AlbumesComponent },
    { path: "Artistas", component: ArtistasComponent},
    { path: "ZoomArtistas", component: ArtistasZoomComponent},
    { path: "zoom/:idAlbum", component: AlbumesZoomComponent },
    { path: "AdminAddContent", canMatch: [autenticacionGuard], component: AgregarContenidoComponent },
    { path: "MisFavoritos", component: MisFavoritosComponent },
    { path: "404", component: error404Component },
    { path: '**', pathMatch: 'full', redirectTo: '404' },

]

