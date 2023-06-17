import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { InstitucionComponent } from './institucion/institucion.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { CampusVistualComponent } from './campus-vistual/campus-vistual.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InstitucionComponent,
    CarrerasComponent,
    EstudianteComponent,
    CampusVistualComponent,
    HeaderComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
