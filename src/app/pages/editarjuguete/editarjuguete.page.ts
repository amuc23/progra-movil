import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editarjuguete',
  templateUrl: './editarjuguete.page.html',
  styleUrls: ['./editarjuguete.page.scss'],
})
export class EditarjuguetePage implements OnInit {

  juguete: any = {
    nombre: 'Funko Pop de Spider-Man',
    precio: 19990,
    descripcion: 'Figura de Spider-Man.',
    imagenUrl: 'assets/img/juguetes/spiderman-juguete.jpg',
    stock: 50
  };

  // Variables para los mensajes de error
  errorCampos: boolean = false;
  errorPrecio: boolean = false;
  errorStock: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() { }

  guardarCambios() {
    // Reiniciar errores
    this.errorCampos = false;
    this.errorPrecio = false;
    this.errorStock = false;

    // Verificar si algún campo está vacío
    if (!this.juguete.nombre || !this.juguete.precio || !this.juguete.descripcion || !this.juguete.stock || !this.juguete.imagenUrl) {
      this.errorCampos = true;
    }

    // Verificar si el precio o el stock son menores a 0
    if (this.juguete.precio < 0) {
      this.errorPrecio = true;
    }

    if (this.juguete.stock < 0) {
      this.errorStock = true;
    }

    // Si no hay errores, redirigir
    if (!this.errorCampos && !this.errorPrecio && !this.errorStock) {
      this.router.navigate(['/crudjuguetes']);
    }
  }
}
