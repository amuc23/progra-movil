import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editarconsola',
  templateUrl: './editarconsola.page.html',
  styleUrls: ['./editarconsola.page.scss'],
})
export class EditarconsolaPage implements OnInit {

  consola = {
      nombre: 'PlayStation 2',
      precio: 459990,
      descripcion: 'La última consola de Sony con gráficos avanzados y soporte para juegos de nueva generación.',
      stock: 20,
      imagenUrl: 'assets/img/consolas/ps2-consola.jpg',
  };

  constructor() { }

  ngOnInit() {
  }

}
