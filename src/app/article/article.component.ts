import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { SharedService } from '../shared.service';

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
    private router: Router,
    private shared: SharedService,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      //this.article = new Article();
      //this.article.key = params['key'];

      this.articleService
        .getArticle(params['key'])
        .subscribe(a => {

          if (a === undefined) {
            this.router.navigateByUrl('not-found');
          }
          else {
            this.article = a;
            this.shared.setTitle(a.title);            
            //this.title.setTitle('My Blog - ' + a.title);
            this.meta.addTags([
              { name: 'description', content: this.article.description },
              { property:'og:title', content: this.shared.getTitle() },
              { property:'og:type', content: 'website' },
              { property:'og:url', content: this.shared.baseUrl + this.article.key }
            ]);
          }
        });
    });
  }

}
