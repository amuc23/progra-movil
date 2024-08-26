import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eliminarjuego',
  templateUrl: './eliminarjuego.page.html',
  styleUrls: ['./eliminarjuego.page.scss'],
})
export class EliminarjuegoPage implements OnInit {

  videojuegos = [
    {
      nombre: 'Juego A',
      precio: 29.99,
      descripcion: 'Descripción del Juego A',
      imagenUrl: 'assets/img/caratula-hollow.jpeg',
      consolas: 'PlayStation, Xbox'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
