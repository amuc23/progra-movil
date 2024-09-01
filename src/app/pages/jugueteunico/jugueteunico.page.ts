import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-jugueteunico',
  templateUrl: './jugueteunico.page.html',
  styleUrls: ['./jugueteunico.page.scss'],
})
export class JugueteunicoPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  compra(){
    this.presentAlert('Añadido al carro','¡Gracias!');
  }

  listadeseos(){
    this.presentAlert('Añadido a Lista de Deseos','¡Gracias!');
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
