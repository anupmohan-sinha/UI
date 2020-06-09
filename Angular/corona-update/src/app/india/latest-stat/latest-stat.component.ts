import { StateWise } from './../india.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-latest-stat',
  templateUrl: './latest-stat.component.html',
  styleUrls: ['./latest-stat.component.scss']
})
export class LatestStatComponent implements OnInit {

  @Input() overallCases: StateWise;
  months = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
  };

  constructor() { }

  ngOnInit(): void {
  }

  formatDateAbsolute = (unformattedDate: string) => {
    const day = unformattedDate.slice(0, 2);
    const month = unformattedDate.slice(3, 5);
    const time = unformattedDate.slice(11);
    return `${day} ${this.months[month]}, ${time.slice(0, 5)} IST`;
  }
}
