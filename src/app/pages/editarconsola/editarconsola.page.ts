import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editarconsola',
  templateUrl: './editarconsola.page.html',
  styleUrls: ['./editarconsola.page.scss'],
})
export class EditarconsolaPage implements OnInit {

  consola: any = {
      nombre: 'PlayStation 2',
      precio: 459990,
      descripcion: 'La última consola de Sony con gráficos avanzados y soporte para juegos de nueva generación.',
      stock: 20,
      imagenUrl: 'assets/img/consolas/ps2-consola.jpg',
  };

  constructor(
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {}

  async guardarCambios() {
    // Verifica si algún campo está vacío o si stock y precio son menores a 0
    if (!this.consola.nombre || !this.consola.precio || !this.consola.descripcion || !this.consola.stock || !this.consola.imagenUrl) {
      await this.mostrarAlerta('Todos los campos son obligatorios. Por favor, completa todos los campos.');
      return;
    }

    if (this.consola.precio < 0) {
      await this.mostrarAlerta('El precio no puede ser menor a 0.');
      return;
    }

    if (this.consola.stock < 0) {
      await this.mostrarAlerta('El stock no puede ser menor a 0.');
      return;
    }

    // Si todos los campos están completos y los valores son válidos, navega a la página deseada
    this.router.navigate(['/crudconsolas']);
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
