import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting.src';
import highcharts3D from 'highcharts/highcharts-3d.src';
import { CountryCases, CountryStat } from '../world.model';
highcharts3D(Highcharts);

@Component({
  selector: 'app-top-cases',
  templateUrl: './top-cases.component.html',
  styleUrls: ['./top-cases.component.scss']
})
export class TopCasesComponent implements OnInit {

  @Input() countryStat: CountryStat[];
  options: any;
  countryName = [];
  activeCases = [];
  deaths = [];
  recovered = [];

  constructor() { }

  ngOnInit(): void {
    this.countryStat = this.countryStat.splice(0, 11);
    this.countryStat.forEach(x => {
      this.countryName.push(x.country_name);
      this.activeCases.push(parseInt( x.active_cases.replace( /,/g, '' ), 10));
      this.deaths.push(parseInt( x.deaths.replace( /,/g, '' ), 10));
      this.recovered.push(parseInt( x.total_recovered.replace( /,/g, '' ), 10));
    });
    this.options =  {
      chart: {
          type: 'column',
          options3d: {
              enabled: true,
              alpha: 5,
              beta: 1,
              viewDistance: 25,
              depth: 40
          }
      },
      credits: {
        enabled: false
      },
      title: {
          text: 'Most Affected countries by covid-19'
      },
      xAxis: {
          categories: this.countryName,
          labels: {
              skew3d: true,
              style: {
                  fontSize: '16px'
              }
          }
      },
      yAxis: {
          allowDecimals: false,
          min: 0,
          title: {
              text: 'Number of total cases',
              skew3d: true
          }
      },
      tooltip: {
          headerFormat: '<b>{point.key}</b><br>',
          pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
      },

      plotOptions: {
          column: {
              stacking: 'normal',
              depth: 40
          }
      },

      series: [{
          name: 'Active Cases',
          data: this.activeCases,
          stack: 'Country'
      }, {
          name: 'Deaths',
          data: this.deaths,
          stack: 'Country'
      },
      {
          name: 'Recovered',
          data: this.recovered,
          stack: 'Country'
      }]
  };
    Highcharts.chart('top-cases-container', this.options);
  }

}
