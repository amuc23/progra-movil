import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crudconsolas',
  templateUrl: './crudconsolas.page.html',
  styleUrls: ['./crudconsolas.page.scss'],
})
export class CrudconsolasPage implements OnInit {

  consolas = [
    {
      nombre: 'PlayStation 5',
      precio: 459990,
      descripcion: 'La última consola de Sony con gráficos avanzados y soporte para juegos de nueva generación.',
      imagenUrl: 'assets/img/consolas/ps2-consola.jpg',
      stock: 20
    },
    {
      nombre: 'Xbox Series X',
      precio: 459990, 
      descripcion: 'La consola más potente de Microsoft con soporte para 4K y juegos de próxima generación.',
      imagenUrl: 'assets/img/consolas/ps2-consola.jpg',
      stock: 15
    },
    {
      nombre: 'Nintendo Switch',
      precio: 299990, 
      descripcion: 'Una consola híbrida que se puede usar tanto como portátil como de sobremesa.',
      imagenUrl: 'assets/img/consolas/ps2-consola.jpg',
      stock: 30
    },
    {
      nombre: 'PlayStation 4',
      precio: 299990, 
      descripcion: 'La consola anterior de Sony, aún popular con una gran biblioteca de juegos.',
      imagenUrl: 'assets/img/consolas/ps2-consola.jpg',
      stock: 25
    },
    {
      nombre: 'Xbox One',
      precio: 299990, 
      descripcion: 'La consola anterior de Microsoft, compatible con una gran cantidad de juegos.',
      imagenUrl: 'assets/img/consolas/ps2-consola.jpg',
      stock: 18
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
