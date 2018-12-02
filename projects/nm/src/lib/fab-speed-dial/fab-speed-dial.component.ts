import { FabSpeedDialAnimation } from './fab-speed-dial.animation';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActionElement } from '../model/action-element';

@Component({
  selector: 'nm-fab-speed-dial',
  template: `
        <div *ngIf="showActions" [@speedDialStagger]="actions.length" class="menu-actions">
            <div *ngFor="let action of actions" class="button mini-button">
                <span class="action-text">{{ action.name }}</span>
                <button mat-mini-fab color="primary" (click)="actionSelected(action)"> 
                    <mat-icon>{{ action.icon }}</mat-icon>
                </button>
            </div>
        </div>
        <div *ngIf="mainIcon" class="button">
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

        .button {
            margin-top: 16px;
        }
        .mini-button {
            margin-right: 8px;
        }
        .action-text {
            margin-right: 16px;
        }
        .menu-actions {
            flex-direction: column-reverse;
            display: flex;
        }
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
