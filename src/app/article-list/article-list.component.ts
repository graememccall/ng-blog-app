import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ARTICLES } from '../mock-articles';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];
  constructor(
    private articleService: ArticleService,
    private shared: SharedService) { }

  ngOnInit(): void {
    //this.articles = ARTICLES;    
    this.getArticles();
    console.log(this.articles);
    this.shared.setTitle("Articles");
  }

  getArticles(): void {
    this.articleService
      .getArticles()
      .subscribe(articles => this.articles = articles);
  }
}
