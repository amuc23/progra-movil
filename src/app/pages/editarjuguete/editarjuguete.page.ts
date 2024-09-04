import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editarjuguete',
  templateUrl: './editarjuguete.page.html',
  styleUrls: ['./editarjuguete.page.scss'],
})
export class EditarjuguetePage implements OnInit {

  juguete: any = {
    nombre: 'Funko Pop de Spider-Man',
    precio: 19990,
    descripcion: 'Figura de Spider-Man.',
    imagenUrl: 'assets/img/juguetes/spiderman-juguete.jpg',
    stock: 50
  };

  constructor(
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() { }

  async guardarCambios() {
    // Verifica si algún campo está vacío
    if (!this.juguete.nombre || !this.juguete.precio || !this.juguete.descripcion || !this.juguete.stock || !this.juguete.imagenUrl) {
      await this.mostrarAlerta('Todos los campos son obligatorios. Por favor, completa todos los campos.');
      return;
    }

    // Verifica si el precio o el stock son menores a 0
    if (this.juguete.precio < 0) {
      await this.mostrarAlerta('El precio no puede ser menor a 0.');
      return;
    }

    if (this.juguete.stock < 0) {
      await this.mostrarAlerta('El stock no puede ser menor a 0.');
      return;
    }

    // Si todos los campos están completos y los valores son válidos, navega a la página deseada
    this.router.navigate(['/crudjuguetes']);
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
