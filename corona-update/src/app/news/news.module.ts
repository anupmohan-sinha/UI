import { NewsResolverService } from './news-resolver.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsHomeComponent } from './news-home/news-home.component';
import { RouterModule } from '@angular/router';
import { routes } from './news.routing';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './news.service';



@NgModule({
  declarations: [NewsHomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NewsHomeComponent,
    RouterModule
  ],
  providers: [NewsService, NewsResolverService]
})
export class NewsModule { }
