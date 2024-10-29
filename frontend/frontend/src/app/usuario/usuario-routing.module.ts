import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio_sesion/inicio_sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { EliminarUsuarioComponent } from './eliminar-usuario/eliminar-usuario.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { GestionUsuarioComponent } from './gestion-usuario/gestion-usuario.component';

const routes: Routes = [
  {path: 'inicio-sesion', component: InicioSesionComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'crear-usuario', component: GestionUsuarioComponent},
  {path: 'eliminar-usuario', component: EliminarUsuarioComponent},
  {path: 'perfil', component: PerfilUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
