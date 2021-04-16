import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './cuentas/agregar/agregar.component';
import { BorrarComponent } from './cuentas/borrar/borrar.component';
import { VerComponent } from './cuentas/ver/ver.component';

const routes: Routes = [
  {path: '',
  children: [
    {path: 'agregar', component: AgregarComponent},
    {path: 'ver', component: VerComponent},
    {path: 'borrar', component: BorrarComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
