import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editarjuego',
  templateUrl: './editarjuego.page.html',
  styleUrls: ['./editarjuego.page.scss'],
})
export class EditarjuegoPage implements OnInit {

  videojuego: any = {
    nombre: 'Hollow Knight',
    precio: 15000,
    descripcion: 'Juego de plataformas',
    imagenUrl: 'assets/img/caratula-hollow.jpeg',
    consolas: 'PlayStation, Xbox',
    stock: 20
  };

  constructor(
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() { }

  async guardarCambios() {
    // Verifica si algún campo está vacío
    if (!this.videojuego.nombre || !this.videojuego.precio || !this.videojuego.descripcion || !this.videojuego.stock || !this.videojuego.consolas || !this.videojuego.imagenUrl) {
      await this.mostrarAlerta('Todos los campos son obligatorios. Por favor, completa todos los campos.');
      return;
    }

    // Verifica si el precio o el stock son menores a 0
    if (this.videojuego.precio < 0) {
      await this.mostrarAlerta('El precio no puede ser menor a 0.');
      return;
    }

    if (this.videojuego.stock < 0) {
      await this.mostrarAlerta('El stock no puede ser menor a 0.');
      return;
    }

    // Si todos los campos están completos y los valores son válidos, navega a la página deseada
    this.router.navigate(['/crudjuegos']);
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
}
