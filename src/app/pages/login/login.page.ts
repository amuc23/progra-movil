import { NgIf } from '@angular/common';
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
  Usuario_registrado:string="admin";
  password_registrado:string ="123";

  //vars para escribir
  usernameunlogged:string="";
  password:string ="";

  constructor(private router:Router, private alertController: AlertController, private toastController: ToastController) { 
    
  }

  ngOnInit() {
  }

  

  loggin(){
    if (this.usernameunlogged === this.Usuario_registrado && this.password === this.password_registrado) {
    let navigationextras: NavigationExtras = {
      state:{
        userconect: this.usernameunlogged
      }
    };

    this.router.navigate(['/perfil'], navigationextras);
  } else {
    this.presentAlert('Usuario / contraseña Incorrectos','Intente nuevamente');
  }
  }

  async presentAlert(titulo:string,msj:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

}

