import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from './../../models/article';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public articulos: Article[];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _serviceArticle: ArticleService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      var buscar = params.buscar;
      this._serviceArticle.buscar(buscar).subscribe(response => {
        if (response.articulos) {
          this.articulos = response.articulos;
        }
      },
        error => {
          console.log(error);

        })
    })


  }

}
