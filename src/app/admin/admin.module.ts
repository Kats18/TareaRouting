import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AgregarComponent } from './cuentas/agregar/agregar.component';
import { VerComponent } from './cuentas/ver/ver.component';
import { BorrarComponent } from './cuentas/borrar/borrar.component';


@NgModule({
  declarations: [
    AgregarComponent,
    VerComponent,
    BorrarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
