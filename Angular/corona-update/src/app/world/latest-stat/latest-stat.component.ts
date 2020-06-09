import { Component, OnInit, Input } from '@angular/core';
import { WorldStat } from '../world.model';

@Component({
  selector: 'app-latest-stat',
  templateUrl: './latest-stat.component.html',
  styleUrls: ['./latest-stat.component.scss']
})
export class LatestStatComponent implements OnInit {

  @Input() worldStat: any;
  totalCases: string;
  constructor() { }

  ngOnInit(): void {
  }

}
