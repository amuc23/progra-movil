import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminarjuego',
  templateUrl: './eliminarjuego.page.html',
  styleUrls: ['./eliminarjuego.page.scss'],
})
export class EliminarjuegoPage implements OnInit {

  videojuegos = [
    {
      nombre: 'Juego A',
      precio: 29.99,
      descripcion: 'Descripción del Juego A',
      imagenUrl: 'assets/img/caratula-hollow.jpeg',
      consolas: 'PlayStation, Xbox'
    }
  ];

  constructor(
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() { }

  async eliminarJuego() {
    const alert = await this.alertController.create({
      header: 'Producto Eliminado',
      message: 'El videojuego ha sido eliminado exitosamente.',
      buttons: ['OK']
    });

    await alert.present();

    // Redirige después de que el usuario haya cerrado la alerta
    alert.onDidDismiss().then(() => {
      this.router.navigate(['/crudjuegos']);
    });
  }

}