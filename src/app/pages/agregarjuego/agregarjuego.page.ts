import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregarjuego',
  templateUrl: './agregarjuego.page.html',
  styleUrls: ['./agregarjuego.page.scss'],
})
export class AgregarjuegoPage implements OnInit {

  // Variables vinculadas a los campos del formulario
  nombre: string = '';
  descripcion: string = '';
  precio: number | null = null;
  stock: number | null = null;
  consolas: string = '';
  urlImagen: string = '';

  // Variables de control para mostrar mensajes de error
  errorCampos: boolean = false;
  errorPrecio: boolean = false;
  errorStock: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  validarCampos() {
    // Reiniciar errores antes de la validación
    this.errorCampos = false;
    this.errorPrecio = false;
    this.errorStock = false;

    // Verificar si algún campo está vacío
    if (!this.nombre || !this.descripcion || this.precio === null || this.stock === null || !this.consolas || !this.urlImagen) {
      this.errorCampos = true;
      return;
    }

    // Verificar si el precio es menor a 0
    if (this.precio < 0) {
      this.errorPrecio = true;
      return;
    }

    // Verificar si el stock es menor a 0
    if (this.stock < 0) {
      this.errorStock = true;
      return;
    }

    // Si todos los campos son válidos, limpiar los errores
    this.errorCampos = false;
    this.errorPrecio = false;
    this.errorStock = false;

    // Navegar a la página deseada
    this.router.navigate(['/crudjuegos']);
  }
}
