import { Injectable } from '@angular/core';
import { dataBase } from "./dbArticle";
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getArticles() {
    return dataBase;
  }
  
  getArticleById(articleID) {
    return dataBase.find((article) =>article.id === articleID);
  }
}
