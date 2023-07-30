import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { InstitucionComponent } from './institucion/institucion.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { AnalisisComponent } from './carreras/analisis/analisis.component';
import { DisenoComponent } from './carreras/diseno/diseno.component';
import { ComercioComponent } from './carreras/comercio/comercio.component';
import { InfraestructuraComponent } from './carreras/infraestructura/infraestructura.component';
import { NotFoundError } from 'rxjs';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { CampusVirtualComponent } from './campus-virtual/campus-virtual.component';


const routes: Routes = [
  { path: '' , component: InicioComponent },
  { path: 'Institucion' , component: InstitucionComponent },
  { path: 'Carrera',component: CarrerasComponent}, 
  { path: 'Carrera/analisis', component: AnalisisComponent}, 
  { path: 'Carrera/diseno',component: DisenoComponent}, 
  { path: 'Carrera/infraestructura',component: InfraestructuraComponent}, 
  { path: 'Carrera/comercio',component: ComercioComponent}, 
  { path: 'Estudiante',component: EstudianteComponent}, 
  { path: 'Campus',component: CampusVirtualComponent}, 


  //{ path: '***',component: }, 





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
