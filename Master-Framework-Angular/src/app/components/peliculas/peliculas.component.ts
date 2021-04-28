import { Component, OnInit,DoCheck,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit,DoCheck,OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    console.log("hubo un cambio");
  }
  ngOnDestroy(){
    console.log("El componente Pelicula se va a eliminar");
  }



}
