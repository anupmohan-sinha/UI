import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kdi-demo-input',
  templateUrl: './demo-input.component.html',
  styleUrls: ['./demo-input.component.scss']
})
export class DemoInputComponent implements OnInit {

  inputValues = [
    {
      label: 'Author Name',
      type: 'text',
      value: 'Anup Mohan',
      size: 'base',
      placeholder: 'please enter author name'
    },
    {
      label: 'Color Code',
      type: 'color',
      value: '#03A2F8',
      size: 'base',
      placeholder: 'please enter color code'
    },
    {
      label: 'Date Type',
      type: 'date',
      value: '2018-07-22',
      size: 'base',
      placeholder: 'please enter date'
    },
    {
      label: 'Month Name',
      type: 'month',
      value: '2020-06',
      size: 'base',
      placeholder: 'please enter month'
    },
    {
      label: 'Time type',
      type: 'time',
      value: '07:45',
      size: 'base',
      placeholder: 'please enter time'
    },
    {
      label: 'URL Type',
      type: 'url',
      value: 'https://designsystemwebapp-development.azurewebsites.net/',
      size: 'base',
      placeholder: 'please enter url'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  get Input() {
    return JSON.stringify(this.inputValues, null, 2);
  }

  set Input(v) {
    try {
      this.inputValues = JSON.parse(v);
    } catch (error) {
      console.log('Error while typing JSON');
    }
  }

}
