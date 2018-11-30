import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActionElement } from 'projects/nm/src/public_api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fabSpeedDialMenuActions : ActionElement[] = [
    { icon: 'add', name: 'Action1'},
    { icon: 'add', name: 'Action2'},
    { icon: 'add', name: 'Action3'},
    { icon: 'add', name: 'Action4'},
    { icon: 'add', name: 'Action5'},
  ];

  constructor() {
    
  }

  ngOnInit() {
  }

  onClickMenuAction(action: ActionElement) {
    console.log('onClickMenuAction', action);
  }
}