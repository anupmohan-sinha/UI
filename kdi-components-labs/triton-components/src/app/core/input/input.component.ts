import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kdi-app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() type: string;
  @Input() value: string;
  @Input() size: string;
  @Input() placeholder?: string;
  @Input() label?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
