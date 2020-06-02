import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorldHomeComponent } from './world-home/world-home.component';
import { RouterModule } from '@angular/router';
import { routes } from './world.routing';
import { HttpClientModule } from '@angular/common/http';
import { LatestStatComponent } from './latest-stat/latest-stat.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { CountrywiseStatComponent } from './countrywise-stat/countrywise-stat.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { WorldService } from './world.service';
import { WorldResolverService } from './world-resolver.service';
import { CountryResolverService } from './country-resolver.service';
import { WorldMapComponent } from './world-map/world-map.component';
import { CountryIsoResolverService } from './country-iso-resolver.service';
import { TopCasesComponent } from './top-cases/top-cases.component';

@NgModule({
  declarations: [WorldHomeComponent, LatestStatComponent, LineChartComponent, CountrywiseStatComponent, WorldMapComponent, TopCasesComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    WorldHomeComponent,
    RouterModule
  ],
  providers: [WorldService, WorldResolverService, CountryResolverService, CountryIsoResolverService]
})
export class WorldModule { }
