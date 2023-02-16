import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [
  //se pueden pasar parámetros a traves de la url con la sintaxis:
  //{path: 'coche/:id'...}
  //En el constructor del componente debo declarar el id + usar actRoute
  {path: '', component: HomeComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
