import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregarjuego',
  templateUrl: './agregarjuego.page.html',
  styleUrls: ['./agregarjuego.page.scss'],
})
export class AgregarjuegoPage implements OnInit {

  nombre: string = '';
  descripcion: string = '';
  precio: number | null = null;
  stock: number | null = null;
  consolas: string = '';
  urlImagen: string = '';

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() { }

  async validarCampos() {
    if (!this.nombre || !this.descripcion || !this.precio || !this.stock || !this.consolas || !this.urlImagen) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debe rellenar todos los campos.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      // Redireccionar solo si todos los campos están completos por eso primero pide la validacion 
      this.router.navigate(['/crudjuegos']);
    }
  }
}
