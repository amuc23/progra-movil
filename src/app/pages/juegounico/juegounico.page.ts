import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-juegounico',
  templateUrl: './juegounico.page.html',
  styleUrls: ['./juegounico.page.scss'],
})
export class JuegounicoPage implements OnInit {

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
