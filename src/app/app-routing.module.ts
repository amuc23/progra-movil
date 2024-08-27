import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'juegos',
    loadChildren: () => import('./pages/juegos/juegos.module').then( m => m.JuegosPageModule)
  },  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'consolas',
    loadChildren: () => import('./pages/consolas/consolas.module').then( m => m.ConsolasPageModule)
  },
  {
    path: 'juguetes',
    loadChildren: () => import('./pages/juguetes/juguetes.module').then( m => m.JuguetesPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'cambioclave',
    loadChildren: () => import('./pages/cambioclave/cambioclave.module').then( m => m.CambioclavePageModule)
  },
  {
    path: 'crudjuegos',
    loadChildren: () => import('./pages/crudjuegos/crudjuegos.module').then( m => m.CrudjuegosPageModule)
  },
  {
    path: 'agregarjuego',
    loadChildren: () => import('./pages/agregarjuego/agregarjuego.module').then( m => m.AgregarjuegoPageModule)
  },
  {
    path: 'editarjuego',
    loadChildren: () => import('./pages/editarjuego/editarjuego.module').then( m => m.EditarjuegoPageModule)
  },
  {
    path: 'eliminarjuego',
    loadChildren: () => import('./pages/eliminarjuego/eliminarjuego.module').then( m => m.EliminarjuegoPageModule)
  },
  {
    path: 'paneladmin',
    loadChildren: () => import('./pages/paneladmin/paneladmin.module').then( m => m.PaneladminPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
