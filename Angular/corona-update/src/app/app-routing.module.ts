import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/india', pathMatch: 'full'},
  {path: 'india', loadChildren: './india/india.module#IndiaModule'},
  {path: 'world', loadChildren: './world/world.module#WorldModule'},
  {path: 'info', loadChildren: './info/info.module#InfoModule'},
  {path: 'news', loadChildren: './news/news.module#NewsModule'},
  {path: 'author', loadChildren: './author/author.module#AuthorModule'},
  {path: 'map', loadChildren: './map/map.module#MapModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
