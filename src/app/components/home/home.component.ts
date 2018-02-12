import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private electronService: ElectronService
  ) { }

  ngOnInit() {
  }

  openWindow(): void {
    window.open('index.html');
  }

  beep(): void {
    this.electronService.shell.beep();
  }

  showNotification(): void {
    let myNotification = new Notification('Title', {
      body: 'Lorem Ipsum Dolor Sit Amet'
    })
  }
}
