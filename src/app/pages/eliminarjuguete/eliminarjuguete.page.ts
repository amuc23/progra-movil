import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminarjuguete',
  templateUrl: './eliminarjuguete.page.html',
  styleUrls: ['./eliminarjuguete.page.scss'],
})
export class EliminarjuguetePage implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() { }

  async eliminarJuguete() {
    const alert = await this.alertController.create({
      header: 'Producto Eliminado',
      message: 'El juguete ha sido eliminado exitosamente.',
      buttons: ['OK']
    });

    await alert.present();

    // Redirige después de que el usuario haya cerrado la alerta
    alert.onDidDismiss().then(() => {
      this.router.navigate(['/crudjuguetes']);
    });
  }

}