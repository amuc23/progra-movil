import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  // Variable para almacenar el nombre del usuario logueado
  userF: string = "";

  // Inyecta el servicio Router en el constructor para manejar la navegación
  constructor(private router: Router) { }

  ngOnInit() {
    // Obtiene la navegación actual y accede al estado pasado
    this.userF = this.router.getCurrentNavigation()?.extras.state?.['userconect'] || '';
  }

  // Método para cerrar sesión y redirigir al login
  cerrarSesion() {
    // Redirige a la página de inicio de sesión sin pasar ningún estado adicional
    this.router.navigate(['/login']);
  }
}