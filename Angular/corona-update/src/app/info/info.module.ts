import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoHomeComponent } from './info-home/info-home.component';
import { RouterModule } from '@angular/router';
import { routes } from './info.routing';



@NgModule({
  declarations: [InfoHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    InfoHomeComponent,
    RouterModule]
})
export class InfoModule { }
