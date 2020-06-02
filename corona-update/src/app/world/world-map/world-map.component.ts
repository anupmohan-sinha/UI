import { CountryIsoStat } from './../world.model';
import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Highmaps from 'highcharts/highmaps';
import MapModule from 'highcharts/modules/map';
const mapIndia = require('@highcharts/map-collection/custom/world-highres3.geo.json');
MapModule(Highcharts);

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {
  @Input() countryIsoStat: CountryIsoStat[];
  options: any;
  isCountryNameEnabled = true;
  displayName = 'Hide';
  data = [];


removeCountryName() {
  this.isCountryNameEnabled = !this.isCountryNameEnabled;
  this.displayName = this.displayName === 'Show' ? 'Hide' : 'Show';
  this.prepareOptions();
  this.drawMap();
}
prepareOptions() {
  this.options = {
    chart: {
      map: 'custom/world-highres3'
    },
    credits: {
      enabled: false
    },
    title: {
      text: ''
    },

    subtitle: {
      text: `Hover over a country for covid-19 cases details`,
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
      joinBy: 'hc-key',
      name: 'Confirmed Cases',
      states: {
        hover: {
          color: '#BADA55'
        }
      },
     dataLabels: {
        enabled: this.isCountryNameEnabled,
        format: '{point.name}'
      }
    }]
  };
}

drawMap() {
  Highmaps.mapChart('world-map-container', this.options);
}
ngOnInit() {
    this.countryIsoStat.forEach(x => {
      const country = [];
      country.push(x.countrycode.toLowerCase());
      country.push(x.confirmed ? x.confirmed : 0, 10);
      this.data.push(country);
    });
    this.prepareOptions();
    this.drawMap();
  }

}
