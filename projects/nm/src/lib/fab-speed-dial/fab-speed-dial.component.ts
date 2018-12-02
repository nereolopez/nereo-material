import { FabSpeedDialAnimation } from './fab-speed-dial.animation';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActionElement } from '../model/action-element';

@Component({
  selector: 'nm-fab-speed-dial',
  template: `
        <div *ngIf="showActions" [@speedDialStagger]="actions.length" class="nm-fab-speed-dial-menu-actions">
            <div *ngFor="let action of actions" class="nm-fab-speed-dial-button nm-fab-speed-dial-mini-button">
                <span class="nm-fab-speed-dial-action-text">{{ action.name }}</span>
                <button mat-mini-fab color="primary" (click)="actionSelected(action)"> 
                    <mat-icon>{{ action.icon }}</mat-icon>
                </button>
            </div>
        </div>
        <div *ngIf="mainIcon" class="nm-fab-speed-dial-button">
            <button mat-fab color="primary" (click)="toggleSpeedDial()">
                <mat-icon [@fabButtonAnimation]="{value: fabSpeedDialState}">{{ displayedIcon }}</mat-icon>
            </button>
        </div>
    `,
  styles: [`
    :host {
        position: absolute;
        bottom: 16px;
        right: 16px;
        text-align: right;
    }

    .nm-fab-speed-dial-button {
        margin-top: 16px;
    }
    .nm-fab-speed-dial-mini-button {
        margin-right: 8px;
    }
    .nm-fab-speed-dial-action-text {
        margin-right: 16px;
    }
    .nm-fab-speed-dial-menu-actions {
        flex-direction: column-reverse;
        display: flex;
    }
  `],
  animations: FabSpeedDialAnimation
})
export class FabSpeedDialComponent implements OnInit {
  @Input() mainIcon: string;

  @Input() actions: ActionElement[];

  @Output() selectedAction = new EventEmitter<ActionElement>();

  showActions: boolean = false;
  displayedIcon: string = '';
  fabSpeedDialState: string = '';

  constructor() { }

  ngOnInit() {
    this.displayedIcon = this.mainIcon;
  }

  toggleSpeedDial() {
    this.showActions = !this.showActions;
    if (this.showActions) {
      this.fabSpeedDialState = 'active';
      this.displayedIcon = 'close';
    } 
    else {
      this.fabSpeedDialState = 'inactive';
      this.displayedIcon = this.mainIcon;
    }
  }

  actionSelected(action: ActionElement) {
    this.selectedAction.emit(action);
    this.toggleSpeedDial();
  }
}
