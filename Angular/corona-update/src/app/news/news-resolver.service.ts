import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NewsService } from './news.service';
import { News } from './news.model';



@Injectable({providedIn: 'root'})
export class NewsResolverService implements Resolve<News> {
    constructor(private newsService: NewsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<News> {
        return this.newsService.getlatestNews();
    }
}
