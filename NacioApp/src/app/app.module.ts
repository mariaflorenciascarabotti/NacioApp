import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { InstitucionComponent } from './institucion/institucion.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { CampusVirtualComponent } from './campus-virtual/campus-virtual.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FormInicioComponent } from './form-inicio/form-inicio.component';
import { FooterComponent } from './footer/footer.component';
import { AnalisisComponent } from './carreras/analisis/analisis.component';
import { DisenoComponent } from './carreras/diseno/diseno.component';
import { InfraestructuraComponent } from './carreras/infraestructura/infraestructura.component';
import { ComercioComponent } from './carreras/comercio/comercio.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InstitucionComponent,
    CarrerasComponent,
    EstudianteComponent,
    CampusVirtualComponent,
    HeaderComponent,
    BannerComponent,
    FormInicioComponent,
    FooterComponent,
    AnalisisComponent,
    DisenoComponent,
    InfraestructuraComponent,
    ComercioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
