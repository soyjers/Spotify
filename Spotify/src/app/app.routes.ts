import { Routes } from '@angular/router';
import { IniciarSesionComponent } from '../app/components/iniciar-sesion/iniciar-sesion.component'
import { RegistrarseComponent } from '../app/components/registrarse/registrarse.component'
import { PrincipalComponent } from './components/principal/principal.component';

export const routes: Routes = [
    {path: "", component: IniciarSesionComponent },
    {path: "registrarse", component: RegistrarseComponent},
    { path: 'principal', component: PrincipalComponent },
]


