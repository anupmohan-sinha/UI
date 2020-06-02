import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-nationality-chart',
  templateUrl: './nationality-chart.component.html',
  styleUrls: ['./nationality-chart.component.scss']
})
export class NationalityChartComponent implements OnInit {

  options: any;
  constructor() { }

  ngOnInit(): void {
    this.options =  {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      credits: {
        enabled: false
      },
      title: {
          text: 'PATIENTS BY NATIONALITY'
      },
      tooltip: {
          pointFormat: '{series.name} : <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} % ({point.y})'
              },
              showInLegend: false
          }
      },
      series: [{
          type: 'pie',
          name: 'covid19 cases',
          innerSize: '50%',
          colorByPoint: true,
          data: [{
              name: 'India',
              y: 2658,
              sliced: true,
              selected: true
          }, {
              name: 'Italy',
              y: 18
          }, {
              name: 'United Kingdom',
              y: 7
          }, {
              name: 'Indonesia',
              y: 15
          }, {
              name: 'United States of America',
              y: 1
          }]
      }]
  };
    Highcharts.chart('nationality-container', this.options);
  }

}
