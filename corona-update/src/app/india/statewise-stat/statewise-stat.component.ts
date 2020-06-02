import { DistrictData, DrilldownData } from './../india.model';
import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);
// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
import { StateWise } from '../india.model';
// Initialize exporting module.
Exporting(Highcharts);

@Component({
    selector: 'app-statewise-stat',
    templateUrl: './statewise-stat.component.html',
    styleUrls: ['./statewise-stat.component.scss']
})
export class StatewiseStatComponent implements OnInit {

    @Input() stateData: StateWise[];
    @Input() districtData: DistrictData;

    stateDrilldownData: DrilldownData[] = [];
    options: any;
    seriesData = [];
    stateCount = 10;
    totalStateCount = 0;
    id = 10;
    constructor() { }

    ngOnInit(): void {
        this.stateData.forEach(x => {
            this.stateCount = this.stateCount + 1;
            const driildownUnit: DrilldownData = { name: null, r: null, y: null, z: null, drilldown: null };
            const temp = { name: null, id: null, data: [] };
            const district = this.districtData[x.state]?.districtData;

            driildownUnit.name = x.state;
            driildownUnit.r = parseInt(x.recovered, 10);
            driildownUnit.y = parseInt(x.confirmed, 10);
            driildownUnit.z = parseInt(x.deaths, 10);
            driildownUnit.drilldown = x.state;
            this.stateDrilldownData.push(driildownUnit);

            temp.name = x.state;
            temp.id = x.state;
            // tslint:disable-next-line: forin
            for (const property in district) {
                const tempArr = [];
                tempArr.push(`${property}`);
                tempArr.push(parseInt(`${district[property].confirmed}`, 10));
                temp.data.push(tempArr);
            }
            this.seriesData.push(temp);
        });
        this.totalStateCount = this.stateCount;
        this.stateCount = 10;
        this.getOptions();
        this.drawStatewiseChart();
    }


    resetChartOption() {
        this.options = null;
    }

    getOptions() {
        this.options = {
            chart: {
                type: 'column'
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'INDIA COVID-19 TRACKER STATEWISE'
            },
            subtitle: {
                text: 'Click the columns to view district level confirmed cases.'
            },
            accessibility: {
                announceNewData: {
                    enabled: true
                }
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Number of cases'
                }

            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: `<span style="color:{point.color}">{point.name}</span><br>
                <span style="color:#6699ff"> Confirmed Cases: </span> <b>{point.y}</b> <br>
                <span style="color:#28a745"> Recovered Cases: </span> <b>{point.r}</b><br/>
                <span style="color:#6c757d"> Deaths: </span> <b>{point.z}</b><br/>
                `
            },

            series: [
                {
                    name: 'State Cases',
                    colorByPoint: true,
                    data: this.stateDrilldownData.slice(0, this.stateCount)
                }
            ],
            drilldown: {
                series: this.seriesData
            }
        };
    }
    drawStatewiseChart() {
        Highcharts.chart('statewiseContainer', this.options);
    }

    displayStates(num: number) {
        this.id = num;
        this.stateCount = num ? num : this.totalStateCount;
        this.resetChartOption();
        this.getOptions();
        this.drawStatewiseChart();
    }

}
