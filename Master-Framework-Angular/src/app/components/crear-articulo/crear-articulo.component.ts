import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent implements OnInit {
  public article:Article;
  public status: String

  constructor(
    private _articleservice:ArticleService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.article= new Article('','','',null,null);
  }

  ngOnInit(): void {
  }
  enviarFormulario(){
    this._articleservice.save(this.article).subscribe(
      response=>{
        if(response.status == 'success'){
          this.status = 'success';
          this.article=response.article;
          this._router.navigate(['/blog']);

        }else{
          this.status = 'error';
          
        }
      },
      error=>{
        console.log("error de save");
      }
      );

  }

}
