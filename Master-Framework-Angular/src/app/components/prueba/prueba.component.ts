import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  public nombre:string;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((parametros:Params)=>{
         this.nombre=parametros.nombre;
    });
  }


}
