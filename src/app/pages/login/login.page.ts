import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // Usuario y contraseña predefinidos para la autenticación
  Usuario_registrado: string = "admin";
  password_registrado: string = "123";

  // Variables de enlace para el formulario de inicio de sesión
  usernameunlogged: string = "";
  password: string = "";
  // Variable para mostrar un mensaje de error en caso de credenciales incorrectas
  loginError: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  // Método que maneja el proceso de inicio de sesión
  loggin() {
    // Compara las credenciales ingresadas con las predefinidas
    if (this.usernameunlogged === this.Usuario_registrado && this.password === this.password_registrado) {
      // Prepara los datos para pasar a la siguiente página usando NavigationExtras
      let navigationextras: NavigationExtras = {
        state: { userconect: this.usernameunlogged }
      };
      // Navega a la página de perfil pasando el estado
      this.router.navigate(['/perfil'], navigationextras);
      // Oculta el mensaje de error si el inicio de sesión es exitoso
      this.loginError = false;
    } else {
      // Muestra un mensaje de error si las credenciales son incorrectas
      this.loginError = true;
    }
  }
}