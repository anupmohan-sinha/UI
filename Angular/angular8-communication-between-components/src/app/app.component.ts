import { Component } from '@angular/core';
import { MessageService } from './services/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages: any[] = [];
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage()
      .subscribe(msg => {
        if (msg) {
          this.messages.push(msg);
        } else {
          this.messages = [];
        }
      });
  }
}
