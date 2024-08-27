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

  products = [
    {
      name: 'Producto 1',
      price: '$10.99',
      description: 'Descripción del producto 1',
      image: 'assets/img/caratula-hollow.jpeg'
    },
    {
      name: 'Producto 2',
      price: '$20.99',
      description: 'Descripción del producto 2',
      image: 'assets/img/caratula-hollow.jpeg'
    },
    {
      name: 'Producto 3',
      price: '$30.99',
      description: 'Descripción del producto 3',
      image: 'assets/img/caratula-hollow.jpeg'
    },
    // Opcional: Duplica las diapositivas si necesitas más para el bucle
    {
      name: 'Producto 4',
      price: '$40.99',
      description: 'Descripción del producto 4',
      image: 'assets/img/caratula-hollow.jpeg'
    },
    {
      name: 'Producto 5',
      price: '$50.99',
      description: 'Descripción del producto 5',
      image: 'assets/img/caratula-hollow.jpeg'
    },
    {
      name: 'Producto 6',
      price: '$50.99',
      description: 'Descripción del producto 5',
      image: 'assets/img/caratula-hollow.jpeg'
    }
  ];

  constructor() {}

  ngAfterViewInit() {
    new Swiper('.swiper-container', this.slideOpts);
  }
}
