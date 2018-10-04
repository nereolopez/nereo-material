import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'nm-contextual-toolbar',
  template: `
    <mat-toolbar *ngIf="count > 0" [ngClass]="classesToApply">
      <div *ngIf="!isProgressMode">
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
      </div>
      <div *ngIf="isProgressMode">
        <mat-spinner></mat-spinner>
        {{ progressMessage }}
        <span class="spacer"></span>
      </div>
    </mat-toolbar>
  `,
  styles: [`
  mat-toolbar{
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
  }

  .page-contextual-toolbar{
    position: fixed;
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

  @Input() actions: any[];

  @Input() moreActions: any[];

  @Input() contextualizeTo: string;

  @Output() selectedAction = new EventEmitter<string>();

  @Output() clearSelection = new EventEmitter();

  classesToApply = { };

  isProgressMode : boolean = false;
  progressMessage : string = '';

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

  public startProgressMode(progressObservable: Observable<string>) {
    this.isProgressMode = true;
    progressObservable.subscribe((progressMessage) => {
      this.progressMessage = progressMessage;
    });
  }

  public stopProgressMode() {
    this.isProgressMode = false;
    this.progressMessage = '';
  }

  actionSelected(action: string): void{
    this.selectedAction.emit(action);
  }

  clear(): void{
    this.clearSelection.emit();
  }

}
