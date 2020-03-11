import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kdi-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  @Input() badge: { color: string, label: string };
  constructor() { }

  ngOnInit() {
  }

}
