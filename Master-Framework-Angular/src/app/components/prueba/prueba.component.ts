import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  public mostrarPeliculas:boolean;
  constructor() { 
    this.mostrarPeliculas = true;
  }

  ngOnInit(): void {
  }

  ocultarPeliculas(){
    this.mostrarPeliculas=false;
  }

}
