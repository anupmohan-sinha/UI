import { Routes } from '@angular/router';
import { NewsHomeComponent } from './news-home/news-home.component';
import { NewsResolverService } from './news-resolver.service';

export const routes: Routes = [{
  path: '',
  component: NewsHomeComponent,
  resolve: {
    news: NewsResolverService
  }
}];
