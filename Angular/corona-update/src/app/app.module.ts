import { MapModule } from './map/map.module';
import { InfoModule } from './info/info.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WorldModule } from './world/world.module';
import { IndiaModule } from './india/india.module';
import { NewsModule } from './news/news.module';
import { AuthorModule } from './author/author.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION
} from 'ngx-ui-loader';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  /* bgsColor: 'red',
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce, // background spinner type */
  fgsType: SPINNER.squareJellyBox, // foreground spinner type
/*   pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5 // progress bar thickness */
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    IndiaModule,
    WorldModule,
    NewsModule,
    AuthorModule,
    InfoModule,
    MapModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
