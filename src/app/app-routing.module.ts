import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { PatineteComponent } from './patinete/patinete.component';


const routes: Routes = [
  {path: 'empleado', component: EmpleadoComponent},
  //se pueden pasar parámetros a traves de la url con la sintaxis:
  //{path: 'coche/:id'...}
  //En el constructor del componente debo declarar el id + usar actRoute
  {path: 'patinete', component: PatineteComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: EmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
