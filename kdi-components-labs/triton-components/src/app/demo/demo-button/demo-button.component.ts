import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-button',
  templateUrl: './demo-button.component.html',
  styleUrls: ['./demo-button.component.scss']
})
export class DemoButtonComponent implements OnInit {
  demoBadge1 = {
    color: 'primary',
    label: 'Primary'
  };
  demoBadge2 = {
    color: 'secondary',
    label: 'secondary',
    size: 'small'
  };
  demoBadge3 = {
    color: 'secondary',
    label: 'secondary',
    size: 'small',
    fluid: 'fluid'
  };
  // demoBadge3 = {
  //   color: 'danger',
  //   label: 'Danger'
  // };
  // demoBadge4 = {
  //   color: 'navy',
  //   label: 'Navy'
  // };
  // demoBadge5 = {
  //   color: 'secondary',
  //   label: 'Secondary'
  // };
  // demoBadge6 = {
  //   color: 'warning',
  //   label: 'Warning'
  // }
  // demoBadge7 = {
  //   color: 'foam',
  //   label: 'Foam'
  // }

  constructor() { }

  ngOnInit() {
  }
  get Badge() {
    return JSON.stringify(this.demoBadge2, null, 2);
  }

  set Badge(v) {
    try {
      this.demoBadge2 = JSON.parse(v);
    } catch (error) {
      console.log('Error while typing JSON');
    }
  }
}
