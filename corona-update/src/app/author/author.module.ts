import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './author.routing';
import { AuthorHomeComponent } from './author-home/author-home.component';

@NgModule({
  declarations: [AuthorHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AuthorHomeComponent,
    RouterModule
  ]
})
export class AuthorModule { }
