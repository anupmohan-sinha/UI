import { Component, OnInit } from '@angular/core';
import { NewsArticles, News } from '../news.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.scss']
})
export class NewsHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  news: NewsArticles[];
  ngOnInit(): void {
    this.news = this.route.snapshot.data.news.articles.slice().reverse();
  }

}
