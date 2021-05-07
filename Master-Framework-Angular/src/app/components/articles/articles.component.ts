import { Component, OnInit, Input} from '@angular/core';
import { Article } from './../../models/article';
import { ArticleService } from './../../services/article.service'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  @Input() articles:Article[];

  constructor(
    private _articleService:ArticleService
    ) { }

  ngOnInit(): void {
    
  }

}
