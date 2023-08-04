import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AnalisisComponent } from './carreras/analisis/analisis.component';
import { DisenoComponent } from './carreras/diseno/diseno.component';
import { ComercioComponent } from './carreras/comercio/comercio.component';
import { InfraestructuraComponent } from './carreras/infraestructura/infraestructura.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { CampusVirtualComponent } from './campus-virtual/campus-virtual.component';


const routes: Routes = [
  { path: '' , component: InicioComponent },
  { path: 'Carrera/analisis', component: AnalisisComponent}, 
  { path: 'Carrera/diseno',component: DisenoComponent}, 
  { path: 'Carrera/infraestructura',component: InfraestructuraComponent}, 
  { path: 'Carrera/comercializacion',component: ComercioComponent}, 
  { path: 'Estudiante',component: EstudianteComponent}, 
  { path: 'Campus',component: CampusVirtualComponent}, 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
