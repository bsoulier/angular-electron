import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

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
}