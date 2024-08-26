import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editarjuego',
  templateUrl: './editarjuego.page.html',
  styleUrls: ['./editarjuego.page.scss'],
})
export class EditarjuegoPage implements OnInit {

  videojuego = {
    nombre: 'Juego A',
    precio: 29.99,
    descripcion: 'Descripción del Juego A',
    imagenUrl: 'assets/img/caratula-hollow.jpeg',
    consolas: 'PlayStation, Xbox'
  };

  constructor() { }

  ngOnInit() { }
}