import { Routes } from '@angular/router';
import { IniciarSesionComponent } from '../app/components/iniciar-sesion/iniciar-sesion.component'
import { RegistrarseComponent } from "./components/registrarse/registrarse.component"
import { PrincipalComponent } from './components/principal/principal.component';
import { AgregarContenidoComponent } from './components/Admin/agregar-contenido/agregar-contenido.component'
import { MisFavoritosComponent } from './components/mis-favoritos/mis-favoritos.component'

export const routes: Routes = [
    {path: "", component: IniciarSesionComponent },
    {path: "registrarse", component: RegistrarseComponent},
    { path: 'principal', component: PrincipalComponent },
    {path: "AdminAddContent", component: AgregarContenidoComponent},
    {path: "MisFavoritos", component: MisFavoritosComponent},
]

