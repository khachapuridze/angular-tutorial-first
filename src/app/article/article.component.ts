import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article;

  constructor(
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService,
    private router: Router)
     {
      this.activatedRoute.paramMap.subscribe(value =>{
        const articleID =  +value.get('articleId');
        this.article = this.newsService.getArticleById(articleID);
        if (!this.article) {
          router.navigate(['error']);

        }
      })
     }

  ngOnInit() {
  }

}
