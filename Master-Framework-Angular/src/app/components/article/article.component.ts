import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { ArticleService } from 'src/app/services/article.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public article: Article;
  public id:String;



  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params["id"];
      this._articleService.getArticle(id).subscribe(response => {
        if (response.article) {
          this.article = response.article;
          this.id=id;

        } else {
          this._router.navigate(['/home']);
          swal({
            title: "Error",
            text: "Ups! Se ha producido un error! =(",
            icon: "error",
           });
        }

      },
        error => {
          console.log(error);
          swal({
            title: "Error",
            text: "Ups! Se ha producido un error! =(",
            icon: "error",
           });

        }
      );
    });
  }

  eliminar() {
    this._route.params.subscribe(params => {
          let id = params['id'];
          swal({
            title: "Esta seguro que quiere borrar el articulo?",
            text: "Esta accion no tiene retorno",
            icon: "warning",
            buttons: [true,true],
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              this._articleService.delete(id).subscribe(response => {
                if (response.articleDeleted) {
                  swal({
                    title: "Eliminar Articulo",
                    text: "Se ha eliminado el articulo Correctamente",
                    icon: "success",
                   });
                  this._router.navigate(['/blog']);
                } else {
                  swal({
                    title: "Error",
                    text: "Ups! Se ha producido un error! =(",
                    icon: "error",
                   });
                  
                }
              },
                error => {
                  swal({
                    title: "Error",
                    text: "Ups! Se ha producido un error! =(",
                    icon: "error",
                   });
                });
            } else {
              swal({
                title: "Cancelar",
                text: "No sea Ha eliminado nada ;)",
                icon: "success",
               });
            }
          });



    });


  }

}
