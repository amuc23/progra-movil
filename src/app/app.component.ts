import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ManejodbService } from './services/manejodb.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private manejodbService: ManejodbService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Aquí puedes añadir lógica de inicialización
      this.manejodbService.dbState().subscribe((ready) => {
        if (ready) {
          // La alerta ha sido removida
        }
      });
    });
  }
}
