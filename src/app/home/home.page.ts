import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper'; // Muestra más de una tarjeta parcialmente visible esto se instala con un npm install swiper

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  slideOpts = {
    slidesPerView: 1.2, // Muestra más de una tarjeta parcialmente visible
    spaceBetween: 2,   // Espacio entre las tarjetas
    centeredSlides: true,
    loop: true,         // Hace que las tarjetas no se repitan en un bucle
  };
  

  //COLECCIONES DE PRODUCTOS

/////////////COLECCION DE JUEGOS//////////////////////////////////
  colec_juegos = [
    {
      nomJ: 'Hollow Knight',
      precioJ: '$15.000',
      imgJ: 'assets/img/juegos/caratula-hollow.jpeg'
    },
    {
      nomJ: 'Megaman11',
      precioJ: '$30.000',
      imgJ: 'assets/img/juegos/caratula-megaman11.jpeg'
    },
    {
      nomJ: 'Skyrim',
      precioJ: '$20.000',
      imgJ: 'assets/img/juegos/Skyrim_Cover.jpg'
    },
    {
      nomJ: 'Lies of pi',
      precioJ: '$40.000',
      imgJ: 'assets/img/juegos/caratula-liesofp.jpeg'
    },
    {
      nomJ: 'Legends Arceus',
      precioJ: '$50.900',
      imgJ: 'assets/img/juegos/leyendas-pokemon-arceus.jpg'
    },
    {
      nomJ: 'Gears Of War',
      precioJ: '$54.000',
      imgJ: 'assets/img/juegos/gears of wars.jpg'
    }
  ];
  ///////////////////////////////////////////////////////////


  ////////////COLECCION DE CONSOLAS//////////////////////
  colec_consolas = [
    {
      name: 'Producto 1',
      price: '$10.99',
      image: 'assets/img/juegos/caratula-hollow.jpeg'
    },
    {
      name: 'Producto 2',
      price: '$20.99',
      image: 'assets/img/caratula-hollow.jpeg'
    },
    {
      name: 'Producto 3',
      price: '$30.99',
      image: 'assets/img/caratula-hollow.jpeg'
    },
    {
      name: 'Producto 4',
      price: '$40.99',
      image: 'assets/img/caratula-hollow.jpeg'
    },
    {
      name: 'Producto 5',
      price: '$50.99',
      image: 'assets/img/caratula-hollow.jpeg'
    },
    {
      name: 'Producto 6',
      price: '$50.99',
      image: 'assets/img/caratula-hollow.jpeg'
    }
  ];
  ///////////////////////////////////////////////////////////


  ///////////////////////////////////////////////////////////
  colec_juguetes = [
    {
      name: 'Producto 1',
      price: '$10.99',
      image: 'assets/img/juegos/caratula-hollow.jpeg'
    },
    {
      name: 'Producto 2',
      price: '$20.99',
      image: 'assets/img/caratula-hollow.jpeg'
    },
    {
      name: 'Producto 3',
      price: '$30.99',
      image: 'assets/img/caratula-hollow.jpeg'
    },
    {
      name: 'Producto 4',
      price: '$40.99',
      image: 'assets/img/caratula-hollow.jpeg'
    },
    {
      name: 'Producto 5',
      price: '$50.99',
      image: 'assets/img/caratula-hollow.jpeg'
    },
    {
      name: 'Producto 6',
      price: '$50.99',
      image: 'assets/img/caratula-hollow.jpeg'
    }
  ];

  username: string = 'JOJO';

  constructor() {}

  ngAfterViewInit() {
    new Swiper('.swiper-container', this.slideOpts);
  }
}
