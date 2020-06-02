import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-gender-chart',
  templateUrl: './gender-chart.component.html',
  styleUrls: ['./gender-chart.component.scss']
})
export class GenderChartComponent implements OnInit {

  options: any;
  constructor() { }

  ngOnInit(): void {
    this.options =  {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false
      },
      credits: {
        enabled: false
      },
      colors: ['#7cb5ec', '#bf79bf'],
      title: {
          text: 'PATIENT GENDER',
          align: 'center',
          verticalAlign: 'top',
          y: 10
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              dataLabels: {
                              enabled: false
                          },
              showInLegend: true,
              center: ['50%', '50%'],
              size: '110%'
          }
      },
      series: [{
          type: 'pie',
          name: 'Covid19 cases',
          innerSize: '50%',
          data: [
              ['Male', 3547],
              ['Female', 1766]
          ]
      }]
  };
    Highcharts.chart('gender-container', this.options);
  }

}
