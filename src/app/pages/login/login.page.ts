import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Usuario_registrado: string = "admin";
  password_registrado: string = "123";

  usernameunlogged: string = "";
  password: string = "";
  loginError: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  loggin() {
    if (this.usernameunlogged === this.Usuario_registrado && this.password === this.password_registrado) {
      // Redirige a perfil pasando el nombre de usuario como parámetro en la URL
      this.router.navigate(['/perfil'], {
        queryParams: { userconect: this.usernameunlogged }
      });
      this.loginError = false;
    } else {
      this.loginError = true;
    }
  }
}