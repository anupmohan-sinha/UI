import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.scss']
})
export class Assignment3Component implements OnInit {

  showParagraph = true;
  currentTime: string;
  noOfClick = 0;
  logTime = [];
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  displayDetails() {
    const d = new Date();
    this.currentTime = d.getDate()  + '-' + (d.getMonth() + 1) + '-'
     + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    this.logTime.push(this.currentTime);
    this.showParagraph = !this.showParagraph;
  }
}
