import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ActionElement } from '../public_api';

@Component({
  selector: 'nm-contextual-toolbar',
  template: `
    <mat-toolbar *ngIf="count > 0" [ngClass]="classesToApply">
      <ng-container *ngIf="progressMessage | async; then progressMode; else defaultMode">
      </ng-container>
      <ng-template #defaultMode>
        <button mat-icon-button (click)="clear()">
        <mat-icon>clear</mat-icon>
        </button>
        {{count}} selected
        <span class="spacer"></span>
        <button mat-icon-button *ngFor="let action of actions" (click)="actionSelected(action.name)">
          <mat-icon matTooltip="{{action.name}}">{{action.icon}}</mat-icon>
        </button>
        <button mat-icon-button *ngIf="moreActions" [matMenuTriggerFor]="menu">
          <mat-icon matTooltip="more">more_vert</mat-icon>
        </button>
        <mat-menu #menu="matMenu" yPosition="below">
          <button mat-menu-item 
                  *ngFor="let moreAction of moreActions" 
                  (click)="actionSelected(moreAction.name)">{{moreAction.name}}</button>
        </mat-menu>
      </ng-template>
      <ng-template #progressMode>
        <mat-spinner [diameter]='24'></mat-spinner>
        {{ progressMessage | async }}
        <span class="spacer"></span>
      </ng-template>
    </mat-toolbar>
  `,
  styles: [`
  mat-toolbar{
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
  }

  mat-toolbar > div {
    align-items: center;
    display: flex;
    width: 100%;
  }

  .page-contextual-toolbar{
    position: fixed;
  }

  mat-spinner {
    margin-left: 8px;
    margin-right: 8px;
  }

  .card-contextual-toolbar {
    position: absolute;
  }

  .spacer {
      flex: 1 1 auto;
  }
  `]
})
export class ContextualToolbarComponent implements OnInit {

  @Input() count:  number;

  @Input() actions: ActionElement[];

  @Input() moreActions: ActionElement[];

  @Input() contextualizeTo: string;

  @Output() selectedAction = new EventEmitter<string>();

  @Output() clearSelection = new EventEmitter();

  classesToApply = { };

  progressMessage : BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() { }

  ngOnInit() {
    this.setContextualization();
  }

  private setContextualization(){
    this.classesToApply = {
      'page-contextual-toolbar': this.contextualizeTo != 'card',
      'card-contextual-toolbar': this.contextualizeTo == 'card'  
    }
  }

  public setProgress(progressMessage: string) {
    this.progressMessage.next(progressMessage);
  }

  public stopProgress() {
    this.progressMessage.next(null);
  }

  actionSelected(action: string): void{
    this.selectedAction.emit(action);
  }

  clear(): void{
    this.clearSelection.emit();
  }

}
