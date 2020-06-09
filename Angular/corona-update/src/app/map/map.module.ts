import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './map.routing';
import { MapHomeComponent } from './map-home/map-home.component';


@NgModule({
  declarations: [MapHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MapHomeComponent,
    RouterModule]
})
export class MapModule { }
