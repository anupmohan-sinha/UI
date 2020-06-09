import { CountryIsoStat, CountryStat } from './../world.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'underscore';
import { WorldStat, CountryCases } from '../world.model';

@Component({
  selector: 'app-world-home',
  templateUrl: './world-home.component.html',
  styleUrls: ['./world-home.component.scss']
})
export class WorldHomeComponent implements OnInit {

  worldStatData: WorldStat;
  countryStatData: CountryCases;
  sortedCountryStatData: CountryStat[];
  sortedCountryStat: CountryStat[];
  countryIsoStatData: CountryIsoStat;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.worldStatData = this.route.snapshot.data.worldData;
    this.countryStatData = this.route.snapshot.data.countryData;
	/* Todo:- Optimization required */
    this.sortedCountryStatData  = (this.countryStatData.countries_stat);
    this.sortedCountryStatData = _.sortBy( this.sortedCountryStatData, item => -parseInt( item.cases.replace( /,/g, '' ), 10));
    this.sortedCountryStat = _.sortBy( this.sortedCountryStatData, item => -parseInt( item.cases.replace( /,/g, '' ), 10));
    this.countryIsoStatData = this.route.snapshot.data.countryIsoData;
  }

}
