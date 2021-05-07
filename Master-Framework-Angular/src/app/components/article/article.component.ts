import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public article: Article;



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

        } else {
          this._router.navigate(['/home']);
        }

      },
        error => {
          console.log(error);

        }
      );
    });
  }

}
