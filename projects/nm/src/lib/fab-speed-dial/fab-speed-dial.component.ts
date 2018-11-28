import { FabSpeedDialAnimation } from './fab-speed-dial.animation';
import { FabSpeedDialMenuAction } from './fab-speed-dial-menu-action';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nm-fab-speed-dial',
  template: `
        <div class="fab-speed-dial" >
            <div *ngIf="showMenuAction" [@speedDialStagger]="menuActions.length" class="menu-actions">
                <div *ngFor="let menuAction of menuActions" class="button mini-button">
                    <span class="action-text">{{ menuAction.menuText }}</span>
                    <button mat-mini-fab color="primary" (click)="clickMenuActionFn(menuAction)"> 
                        <mat-icon>{{ menuAction.menuIcon }}</mat-icon>
                    </button>
                </div>
            </div>
            <div *ngIf="mainIcon" class="button">
                <button mat-fab color="primary" (click)="showMenuActionFn()">
                    <mat-icon [@fabButtonAnimation]="{value: fabSpeedDialState}">{{ displayedIcon }}</mat-icon>
                </button>
            </div>
        </div>
    `,
  styles: [`
    .fab-speed-dial {
        position: absolute;
        bottom: 15px;
        right: 15px;
        text-align: right;
    }
    .button {
        margin-top: 15px;
    }
    .mini-button {
        margin-right: 8px;
    }
    .action-text {
        margin-right: 15px;
    }
    .menu-actions {
        flex-direction: column-reverse;
        display: flex;
    }
  `],
  animations: FabSpeedDialAnimation
})
export class FabSpeedDialComponent implements OnInit {
  @Input() mainIcon: string;

  @Input() menuActions: FabSpeedDialMenuAction[];

  @Output() clickMenuAction = new EventEmitter<FabSpeedDialMenuAction>();

  showMenuAction: boolean = false;
  displayedIcon: string = '';
  fabSpeedDialState: string = '';

  constructor() { }

  ngOnInit() {
    this.displayedIcon = this.mainIcon;
  }

  showMenuActionFn() {
    this.showMenuAction = !this.showMenuAction;
    if (this.showMenuAction) {
      this.fabSpeedDialState = 'active';
      this.displayedIcon = 'close';
    } 
    else {
      this.fabSpeedDialState = 'inactive';
      this.displayedIcon = this.mainIcon;
    }
  }

  clickMenuActionFn(menuAction: FabSpeedDialMenuAction) {
    this.clickMenuAction.emit(menuAction);
  }
}
