import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article = new Article();

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      //this.article = new Article();
      //this.article.key = params['key'];

      this.articleService
      .getArticle(params['key'])
      .subscribe(a => {
        
        if(a === undefined) {
          this.router.navigateByUrl('not-found');
        }
        else{
          this.article = a;
        }
      });
    });
  }

}
