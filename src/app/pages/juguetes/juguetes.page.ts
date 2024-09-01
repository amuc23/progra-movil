import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-juguetes',
  templateUrl: './juguetes.page.html',
  styleUrls: ['./juguetes.page.scss'],
})
export class JuguetesPage implements OnInit {

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
