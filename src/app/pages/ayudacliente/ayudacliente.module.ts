import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyudaclientePageRoutingModule } from './ayudacliente-routing.module';

import { AyudaclientePage } from './ayudacliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyudaclientePageRoutingModule
  ],
  declarations: [AyudaclientePage]
})
export class AyudaclientePageModule {}
