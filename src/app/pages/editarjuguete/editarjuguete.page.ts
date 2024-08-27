import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editarjuguete',
  templateUrl: './editarjuguete.page.html',
  styleUrls: ['./editarjuguete.page.scss'],
})
export class EditarjuguetePage implements OnInit {

  juguete = {
      nombre: 'Funko Pop  de Spider-Man',
      precio: 19990,
      descripcion: 'Figura de Spider-Man .',
      imagenUrl: 'assets/img/juguetes/spiderman-juguete.jpg',
      stock: 50
};



  constructor() { }

  ngOnInit() {
  }

}
