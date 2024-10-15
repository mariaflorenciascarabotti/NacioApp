import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void { }

  irPlanAnalisis() {
    this.router.navigate(['Carrera/analisis']);
  }

  irPlanDiseno() {
    this.router.navigate(['Carrera/diseno']);
  }

  irPlanInfra() {
    this.router.navigate(['Carrera/infraestructura']);
  }

  irPlanComercio() {
    this.router.navigate(['Carrera/comercializacion']);
  }
}











