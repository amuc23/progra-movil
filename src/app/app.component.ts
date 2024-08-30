import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  //username: string = 'JOJO';

  //var inicializada pero vacía
  username!:string;
  constructor() {}
}
