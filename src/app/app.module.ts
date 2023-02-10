import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { PatineteComponent } from './patinete/patinete.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    HomeComponent,
    PatineteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //formularios declarados:
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
