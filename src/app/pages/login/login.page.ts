import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //usernameunlogged!:string;

  //credenciales para entrar
  Usuario_registrado:string="macaco";
  password_registrado:string ="potato123";

  //vars para escribir
  usernameunlogged:string="";
  password:string ="";

  constructor(private router:Router, private alertController: AlertController, private toastController: ToastController) { 
    
  }

  ngOnInit() {
  }

  loggin(){
    let navigationextras: NavigationExtras = {
      state:{
        userconect: this.usernameunlogged
      }
    };

    this.router.navigate(['/perfil'], navigationextras);
  }

}

