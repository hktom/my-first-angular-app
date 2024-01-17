import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  alowServer = true;
  serverCreationStatus = 'No server was created!';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.alowServer = false;
    }, 4000);
  }

  onCreateServer() {
    // this.serverCreationStatus = 'Server was created!';
    this.servers.push(this.serverCreationStatus);
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverCreationStatus = (<HTMLInputElement>event.target)
      .value as string;
  }
}
