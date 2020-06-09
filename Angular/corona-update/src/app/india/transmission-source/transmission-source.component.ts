import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-transmission-source',
  templateUrl: './transmission-source.component.html',
  styleUrls: ['./transmission-source.component.scss']
})
export class TransmissionSourceComponent implements OnInit {

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
          text: 'Positive Cases by Source of Transmission'
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
                enabled: false,
                format: '<b>{point.name}</b>: {point.percentage:.1f} % ({point.y})'
              },
              showInLegend: true
          }
      },
      series: [{
          type: 'pie',
          name: 'covid19 cases',
          innerSize: '50%',
          colorByPoint: true,
          data: [
          {
              name: 'Primary Contact',
              y: 116
          }, {
              name: 'Travel History',
              y: 34
/*               sliced: true,
              selected: true */
          }, {
              name: 'SARI',
              y: 19
          }, {
              name: 'TJ',
              y: 5
          }, {
              name: 'ILI',
              y: 5
          }, {
              name: 'Visit to BBMP Containment Zone',
              y: 1
          }, {
              name: 'HealthCare Worker',
              y: 1
          }, {
              name: 'Travel History+Primary Contact',
              y: 1
          }]
      }]
  };
    Highcharts.chart('source-container', this.options);
  }

}

