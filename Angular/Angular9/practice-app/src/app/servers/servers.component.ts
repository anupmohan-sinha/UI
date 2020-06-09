import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  serverName: string;
  username: string;
  isActive: boolean;
  allowNewServer = false;
  serverCreationStatus: string;
  serverCreated = false;
  servers = ['Testserver', 'Testsever 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  resetUsername() {
    this.username = '';
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = this.serverName ? true : false;
    this.serverCreationStatus = 'The server was created ' + this.serverName;
  }
}
