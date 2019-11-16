import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.messageService.sendMessage('Message from Home Component to App Component! \n Both are separate components!!');

  }

  clearMessages() {
    this.messageService.clearMessages();
  }

}
