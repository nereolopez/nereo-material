import { FabSpeedDialAnimation } from './fab-speed-dial.animation';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActionElement } from '../model/action-element';

@Component({
  selector: 'nm-fab-speed-dial',
  template: `
        <div id="nm-fab-speed-dial-button-overlay"></div>
        <div *ngIf="showActions" [@speedDialStagger]="actions.length" class="nm-fab-speed-dial-menu-actions">
            <div *ngFor="let action of actions" class="nm-fab-speed-dial-button nm-fab-speed-dial-mini-button">
                <mat-card class="nm-fab-speed-dial-card-action">
                    {{ action.name }}
                </mat-card>
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
        display: flex;
        align-items: center;
        margin-right: 8px;
    }
    .nm-fab-speed-dial-card-action {
        margin-right: 16px;
        padding: 12px;
        text-align: center;
        padding-right: 16px;
        padding-left: 16px;
    }
    .nm-fab-speed-dial-menu-actions {
        flex-direction: column-reverse;
        display: flex;
    }
    .nm-fab-speed-dial-overlay {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: -1;
        background: rgba(0, 0, 0, 0.32);
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
      document.getElementById('nm-fab-speed-dial-button-overlay').classList.add('nm-fab-speed-dial-overlay');
    } 
    else {
      this.fabSpeedDialState = 'inactive';
      this.displayedIcon = this.mainIcon;
      document.getElementById('nm-fab-speed-dial-button-overlay').classList.remove('nm-fab-speed-dial-overlay');
    }
  }

  actionSelected(action: ActionElement) {
    this.selectedAction.emit(action);
    this.toggleSpeedDial();
  }
}
