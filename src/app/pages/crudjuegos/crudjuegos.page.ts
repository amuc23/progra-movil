import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crudjuegos',
  templateUrl: './crudjuegos.page.html',
  styleUrls: ['./crudjuegos.page.scss'],
})
export class CrudjuegosPage implements OnInit {
  
  videojuegos = [
    {
      nombre: 'Juego A',
      precio: 29.99,
      descripcion: 'Descripción del Juego A',
      imagenUrl: 'assets/img/caratula-hollow.jpeg',
      consolas: 'PlayStation, Xbox'
    },
    {
      nombre: 'Juego B',
      precio: 49.99,
      descripcion: 'Descripción del Juego B',
      imagenUrl: 'assets/img/caratula-hollow.jpeg',
      consolas: 'PC, Nintendo Switch'
    },
    {
      nombre: 'Juego C',
      precio: 19.99,
      descripcion: 'Descripción del Juego C',
      imagenUrl: 'assets/img/caratula-hollow.jpeg',
      consolas: 'PlayStation, Xbox, PC'
    },
    {
      nombre: 'Juego D',
      precio: 39.99,
      descripcion: 'Descripción del Juego D',
      imagenUrl: 'assets/img/caratula-hollow.jpeg',
      consolas: 'Nintendo Switch, PC'
    },
    {
      nombre: 'Juego E',
      precio: 59.99,
      descripcion: 'Descripción del Juego E',
      imagenUrl: 'assets/img/caratula-hollow.jpeg',
      consolas: 'PlayStation, Xbox'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
