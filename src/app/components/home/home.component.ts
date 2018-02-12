import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { IMessage } from 'app/interfaces/imessage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private electronService: ElectronService) {
  }

  ngOnInit() {
  }

  testMethod(): void {

    let pong: string = this.electronService.ipcRenderer.sendSync('ping', 'ping');
    console.log(pong);
  }

  sendTypedObject(): void {
    var message : IMessage = { name: 'message', priority: 0, body: { content: 'Hello process', isHtml: false } }
    let response: IMessage = this.electronService.ipcRenderer.sendSync('object', message);
    console.log(response.body.content);
  }
}