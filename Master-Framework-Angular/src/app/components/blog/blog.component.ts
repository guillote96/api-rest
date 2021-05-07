import { Component, OnInit } from '@angular/core';
import {ArticleService} from './../../services/article.service';
import {Article } from './../../models/article';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public articles:Article[];

  constructor(
    private _articleService:ArticleService
  ) { }

  ngOnInit(): void {
   this._articleService.getArticles().subscribe(response=>{
       this.articles=response.articles;
       console.log(this.articles);
     },
      error =>{
        console.log(error);
     })
  }

}
