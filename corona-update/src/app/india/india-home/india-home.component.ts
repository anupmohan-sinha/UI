import { DistrictData } from './../india.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndiaStat, StateWise } from '../india.model';

@Component({
  selector: 'app-india-home',
  templateUrl: './india-home.component.html',
  styleUrls: ['./india-home.component.scss']
})
export class IndiaHomeComponent implements OnInit {

  indiaStatData: IndiaStat;
  overallCases: StateWise;
  statewiseData: StateWise[];
  stateDistrictData: DistrictData;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.indiaStatData = this.route.snapshot.data.indiaData;
    [ this.overallCases ] = this.indiaStatData.statewise;
    this.statewiseData = this.indiaStatData.statewise.splice(1);
    this.stateDistrictData = this.route.snapshot.data.stateData;
  }

}
