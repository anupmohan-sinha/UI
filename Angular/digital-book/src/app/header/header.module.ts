import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { routes } from './header-routing';


@NgModule({
  declarations: [HeaderHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [HeaderHomeComponent]
})
export class HeaderModule { }
