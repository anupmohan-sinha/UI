import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kdi-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() color = 'primary';
  @Input() label: string;
  @Input() size = 'base';
  @Input() disabled?: string;
  @Input() fluid?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
