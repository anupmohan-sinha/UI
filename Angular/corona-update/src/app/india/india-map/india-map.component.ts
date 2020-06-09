import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Highmaps from 'highcharts/highmaps';
import MapModule from 'highcharts/modules/map';
import { StateWise } from '../india.model';
const mapIndia = require('@highcharts/map-collection/countries/in/custom/in-all-disputed.geo.json');
MapModule(Highcharts);

@Component({
  selector: 'app-india-map',
  templateUrl: './india-map.component.html',
  styleUrls: ['./india-map.component.scss']
})
export class IndiaMapComponent implements OnInit {
  @Input() stateData: StateWise[];
  options: any;
  data = [];



  ngOnInit() {
    this.stateData.forEach(x => {
      const state = [];
      if (x.state === 'Arunachal Pradesh') {
        state.push('arunanchal pradesh');
        state.push(parseInt(x.confirmed ? x.confirmed : '0', 10));
        this.data.push(state);
        return;
      }

      state.push(x.state.toLowerCase());
      state.push(parseInt(x.confirmed ? x.confirmed : '0', 10));
      this.data.push(state);
    });
    this.options = {
      chart: {
        map: 'countries/in/custom/in-all-disputed'
      },
      credits: {
        enabled: false
      },
      title: {
        text: ''
      },

      subtitle: {
        text: `Hover over a state or UT for details`,
       // align: 'left'
      },

      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },

      colorAxis: {
        min: 0
      },
      series: [{
        data: this.data,
        mapData: mapIndia,
        name: 'Confirmed Cases',
        states: {
          hover: {
            color: '#BADA55'
          }
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        } 
      }]
    };
    Highmaps.mapChart('map-container', this.options);
  }

}
