import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

interface Categoria {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-ayudacliente',
  templateUrl: './ayudacliente.page.html',
  styleUrls: ['./ayudacliente.page.scss'],
})
export class AyudaclientePage implements OnInit {

  categorias: Categoria[] = [
    { value: 'consolas', viewValue: 'Consolas' },
    { value: 'juegos', viewValue: 'Juegos' },
    { value: 'juguetes', viewValue: 'Juguetes' },
  ];

  // Datos del formulario
  categoria: string = '';
  email: string = '';
  descripcion: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() { }

  async onSubmit() {
    // Validación de campos
    if (!this.categoria || !this.email.includes('@') || !this.descripcion) {
      const toast = await this.toastController.create({
        message: 'Por favor completa todos los campos correctamente.',
        duration: 2000,
        position: 'bottom',
        color: 'danger',
      });
      await toast.present();
      return;
    }

    // Mostrar el toast de éxito
    const toast = await this.toastController.create({
      message: 'Petición enviada',
      duration: 2000,
      position: 'bottom',
      color: 'success',
    });
    await toast.present();

    // Redirigir a la página de perfil después del toast
    setTimeout(() => {
      this.router.navigate(['/perfil']);
    }, 0);
  }
}
