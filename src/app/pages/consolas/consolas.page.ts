import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.page.html',
  styleUrls: ['./consolas.page.scss'],
})
export class ConsolasPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  compra(){
    this.presentAlert('Añadido al carro','¡Gracias!');
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
