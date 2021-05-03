import { Component, OnInit,DoCheck,OnDestroy} from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit,DoCheck,OnDestroy {
  public peliculas:Pelicula[];
  public favorita:Pelicula;
  constructor() { 
    this.peliculas =[
      new Pelicula("Harry Potter y la Piedra Filosofal","https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/12/harry-potter-piedra-filosofal.jpg?itok=1_pqQxcN"),
      new Pelicula("Harry Potter y la camara de los secretos","https://comoacaba.com/wp-content/uploads/2018/11/bhCfAzeMMg7GyLDT11yVM2i1NPh.jpg")
    ];
  }

  ngOnInit(): void {
  }
  ngDoCheck(){
    console.log("hubo un cambio");
  }
  ngOnDestroy(){
    console.log("El componente Pelicula se va a eliminar");
  }

  mostrarFavorita(event){
     this.favorita=event;
  }



}
