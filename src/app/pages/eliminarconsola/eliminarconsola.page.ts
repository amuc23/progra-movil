import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminarconsola',
  templateUrl: './eliminarconsola.page.html',
  styleUrls: ['./eliminarconsola.page.scss'],
})
export class EliminarconsolaPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() { }

  async eliminarConsola() {
    const alert = await this.alertController.create({
      header: 'Producto Eliminado',
      message: 'La consola ha sido eliminada exitosamente.',
      buttons: ['OK']
    });

    await alert.present();

    // Redirige después de que el usuario haya cerrado la alerta
    alert.onDidDismiss().then(() => {
      this.router.navigate(['/crudconsolas']);
    });
  }

}