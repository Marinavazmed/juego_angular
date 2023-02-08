import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'empleado', component: EmpleadoComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: EmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
