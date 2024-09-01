import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editarjuego',
  templateUrl: './editarjuego.page.html',
  styleUrls: ['./editarjuego.page.scss'],
})
export class EditarjuegoPage implements OnInit {

  videojuego : any = {
    nombre: 'Hollow Kningt',
    precio: 15000,
    descripcion: 'Juego de plataformas',
    imagenUrl: 'assets/img/caratula-hollow.jpeg',
    consolas: 'PlayStation, Xbox',
    stock: 20
  };

  constructor() { }

  ngOnInit() { }
}