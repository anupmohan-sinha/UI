import { CasesTimeSeries } from './../india.model';
import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-datewise-bar-stat',
  templateUrl: './datewise-bar-stat.component.html',
  styleUrls: ['./datewise-bar-stat.component.scss']
})
export class DatewiseBarStatComponent implements OnInit {

  @Input() timeSeriesCases: CasesTimeSeries[];

  constructor() {

  }
  options: any;
  dateRange = [];
  dailyConfirmed = [];
  dailyRecovered = [];
  dailyDeceased = [];
  totalDays: number;
  displayDays = 10;
  sliceValue: number;
  type = 'column';
  isChecked = false;
  chartType = 'Line Chart';
  id = 10;

  ngOnInit(): void {
    this.timeSeriesCases.forEach(x => {
      this.dateRange.push(x.date);
      this.dailyConfirmed.push(parseInt(x.dailyconfirmed, 10));
      this.dailyRecovered.push(parseInt(x.dailyrecovered, 10));
      this.dailyDeceased.push(parseInt(x.dailydeceased, 10));
    });
    this.drawChart();
  }
  changeChartType() {
    this.type = this.isChecked ? 'column' : 'spline';
    this.chartType = this.isChecked ? 'Line Chart' : 'Bar Chart';
    this.drawChart();
  }
  changeDuration(num: number) {
    this.id = num;
    this.displayDays = num ;
    this.drawChart();
  }

  flushData() {
    this.dateRange = [];
    this.dailyConfirmed = [];
    this.dailyRecovered = [];
    this.dailyDeceased = [];
  }
  drawChart() {
    this.totalDays = this.dailyConfirmed.length;
    this.sliceValue = this.displayDays ? (this.totalDays - this.displayDays) : 0;
    this.options = {
          colors: ['#6699ff', '#28a745', '#6c757d'],
          chart: {
              type: this.type
          },
          credits: {
            enabled: false
          },
          title: {
              text: 'Daily Covid-19 Cases'
          },
          subtitle: {
              text: 'Source: covid19india'
          },
          xAxis: {
              categories: this.dateRange.slice(this.sliceValue),
              crosshair: true
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Number of People (count)'
              }
          },
          tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style="padding:0"><b>{point.y} </b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
          },
          plotOptions: {
              column: {
                  pointPadding: 0.2,
                  borderWidth: 0
              }
          },
          series: [{
              name: 'Confirmed Cases',
              data: this.dailyConfirmed.slice(this.sliceValue)

          }, {
              name: 'Recovered Cases',
              data: this.dailyRecovered.slice(this.sliceValue)

          }, {
              name: 'Death',
              data: this.dailyDeceased.slice(this.sliceValue)

          }]
        };
    Highcharts.chart('container', this.options);
  }

}
