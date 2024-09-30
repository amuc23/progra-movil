import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregarjuguete',
  templateUrl: './agregarjuguete.page.html',
  styleUrls: ['./agregarjuguete.page.scss'],
})
export class AgregarjuguetePage implements OnInit {

  // Variables vinculadas a los campos del formulario
  nombre: string = '';
  descripcion: string = '';
  precio: number | null = null;
  stock: number | null = null;
  urlImagen: string = '';
  
  // Variables para los mensajes de error
  errorCampos: boolean = false;
  errorPrecio: boolean = false;
  errorStock: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() { }

  validarCampos() {
    // Reiniciar errores
    this.errorCampos = false;
    this.errorPrecio = false;
    this.errorStock = false;

    // Verificar si algún campo está vacío
    if (!this.nombre || !this.descripcion || this.precio === null || this.stock === null || !this.urlImagen) {
      this.errorCampos = true;
    }

    // Verificar si el precio o el stock son menores a 0
    if (this.precio !== null && this.precio < 0) {
      this.errorPrecio = true;
    }

    if (this.stock !== null && this.stock < 0) {
      this.errorStock = true;
    }

    // Si no hay errores, redirigir
    if (!this.errorCampos && !this.errorPrecio && !this.errorStock) {
      this.router.navigate(['/crudjuguetes']);
    }
  }
}

