import { Injectable } from '@angular/core';
import { Article } from './../models/article'
import { HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

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

  getArticle(id):Observable<any>{
    return this._httpclient.get('http://localhost:3900/api/article/'+id);
  }
  buscar(buscar):Observable<any>{
    return this._httpclient.get('http://localhost:3900/api/buscar/'+buscar);
  }
  save (article):Observable<any>{
    const articulo= JSON.stringify(article);
    const headers = { 'content-type': 'application/json'}
    return this._httpclient.post<any>('http://localhost:3900/api/save',articulo,{'headers':headers})
       .pipe(
         catchError((err) => {
           console.error(err);
           throw err;
         }
       ));
    }

    update (id,article):Observable<any>{
      const articulo= JSON.stringify(article);
      const headers = { 'content-type': 'application/json'}
      return this._httpclient.put<any>('http://localhost:3900/api/article/'+id,articulo,{'headers':headers})
         .pipe(
           catchError((err) => {
             console.error(err);
             throw err;
           }
         ));
    }

    delete (id):Observable<any>{
      return this._httpclient.delete<any>('http://localhost:3900/api/article/'+id)
         .pipe(
           catchError((err) => {
             console.error(err);
             throw err;
           }
         ));
    }
    
}
