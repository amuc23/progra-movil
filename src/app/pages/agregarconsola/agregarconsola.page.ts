import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregarconsola',
  templateUrl: './agregarconsola.page.html',
  styleUrls: ['./agregarconsola.page.scss'],
})
export class AgregarconsolaPage implements OnInit {

  // Variables vinculadas a los campos del formulario
  nombre: string = '';
  descripcion: string = '';
  precio: number | null = null;
  stock: number | null = null;
  urlImagen: string = '';

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() { }

  async validarCampos() {
    if (!this.nombre || !this.descripcion || this.precio === null || this.stock === null || !this.urlImagen) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debe rellenar todos los campos.',
        buttons: ['OK']
      });
      await alert.present();
    } else if (this.precio < 0) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El precio no puede ser menor a 0.',
        buttons: ['OK']
      });
      await alert.present();
    } else if (this.stock < 0) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El stock no puede ser menor a 0.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      // Redireccionar solo si todos los campos están completos y son válidos
      this.router.navigate(['/crudconsolas']);
    }
  }
}
