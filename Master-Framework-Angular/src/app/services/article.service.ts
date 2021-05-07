import { Injectable } from '@angular/core';
import { Article } from './../models/article'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
 

  constructor(
    private _httpclient: HttpClient
  ) { }


  getArticles():Observable<any>{
    return this._httpclient.get('http://localhost:3900/api/articles');
  }
}
