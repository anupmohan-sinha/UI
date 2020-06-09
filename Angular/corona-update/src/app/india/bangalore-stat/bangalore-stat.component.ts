import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bangalore-stat',
  templateUrl: './bangalore-stat.component.html',
  styleUrls: ['./bangalore-stat.component.scss']
})
export class BangaloreStatComponent implements OnInit {

  options: any;
  constructor() { }

  ngOnInit(): void {
    this.options = {
      chart: {
          type: 'bar'
      },
      credits: {
        enabled: false
      },
      colors: ['#66CDAA', '#6c757d', '#7cb5ec'],
      title: {
          text: 'Active Cases in Bengaluru'
      },
      xAxis: {
          categories: ['Bommanahalli', 'East',
          'Mahadevpura', 'Outside Karnataka',
          'RR Nagar', 'Rest Of Bangalore Urban',
          'South', 'West', 'Yelahanka']
      },
      yAxis: {
          min: 0,
          title: {
              text: ''
          }
      },
      legend: {
          reversed: true
      },
      plotOptions: {
          series: {
            dataLabels: {
              inside: true,
              enabled: true,
              /* style: {
                color: 'white'
              } */
            },
            stacking: 'normal'
          }
      },
      series: [
        {
          name: 'Recovered',
          data: [31, 16, 10, 3, 3, 0, 17, 31, 1]
        },
        {
          name: 'Death',
          data: [0, 2, 0, 1, 0, 0, 3, 2, 0]
        },
        {
          name: 'Active',
          data: [22, 31, 1, 0, 1, 1, 4, 39, 1]
        }]
  };
    Highcharts.chart('bangalore-container', this.options);
  }

}
