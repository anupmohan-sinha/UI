import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndiaHomeComponent } from './india-home/india-home.component';
import { LatestStatComponent } from './latest-stat/latest-stat.component';
import { StatewiseStatComponent } from './statewise-stat/statewise-stat.component';
import { IndiaService } from './india.service';
import { DatewiseBarStatComponent } from './datewise-bar-stat/datewise-bar-stat.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { RouterModule } from '@angular/router';
import { routes } from './india.routing';
import { IndiaResolverService } from './india-resolver.service';
import { StateResolverService } from './state-resolver.service';
import { IndiaMapComponent } from './india-map/india-map.component';
import { StateChartComponent } from './state-chart/state-chart.component';
import { GenderChartComponent } from './gender-chart/gender-chart.component';
import { NationalityChartComponent } from './nationality-chart/nationality-chart.component';
import { BangaloreStatComponent } from './bangalore-stat/bangalore-stat.component';
import { TransmissionSourceComponent } from './transmission-source/transmission-source.component';



@NgModule({
  declarations: [IndiaHomeComponent, LatestStatComponent, StatewiseStatComponent, DatewiseBarStatComponent,
     LineChartComponent, IndiaMapComponent, StateChartComponent, GenderChartComponent, NationalityChartComponent, BangaloreStatComponent, TransmissionSourceComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    IndiaHomeComponent,
    RouterModule
  ],
  providers: [ IndiaService, IndiaResolverService, StateResolverService ]
})
export class IndiaModule { }
