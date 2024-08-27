import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crudjuguetes',
  templateUrl: './crudjuguetes.page.html',
  styleUrls: ['./crudjuguetes.page.scss'],
})
export class CrudjuguetesPage implements OnInit {

  juguetes = [
    {
      nombre: 'Funko Pop  de Spider-Man',
      precio: 19990,
      descripcion: 'Figura de Spider-Man .',
      imagenUrl: 'assets/img/juguetes/spiderman-juguete.jpg',
      stock: 50
    },
    {
      nombre: 'Funko Pop de Darth Vader',
      precio: 14990,
      descripcion: 'Figura coleccionable Funko Pop de Darth Vader, ideal para fans de Star Wars.',
      imagenUrl: 'assets/img/juguetes/spiderman-juguete.jpg',
      stock: 40
    },
    {
      nombre: 'Set de LEGO Harry Potter',
      precio: 49990,
      descripcion: 'Set de LEGO de la serie Harry Potter que incluye minifiguras y escenarios icónicos.',
      imagenUrl: 'assets/img/juguetes/spiderman-juguete.jpg',
      stock: 30
    },
    {
      nombre: 'Réplica del Escudo del Capitán América',
      precio: 69990,
      descripcion: 'Réplica a escala del escudo del Capitán América, hecha de materiales de alta calidad.',
      imagenUrl: 'assets/img/juguetes/spiderman-juguete.jpg',
      stock: 20
    },
    {
      nombre: 'Pelota de Dragon Ball Z',
      precio: 9990,
      descripcion: 'Pelota coleccionable de Dragon Ball Z con el diseño de las esferas del dragón.',
      imagenUrl: 'assets/img/juguetes/spiderman-juguete.jpg',
      stock: 100
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
