import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nm-contextual-toolbar',
  template: `
    <mat-toolbar *ngIf="count > 0">
      <button mat-icon-button (click)="clear()">
          <mat-icon>clear</mat-icon>
      </button>
      {{count}} selected
      <span class="spacer"></span>
      <button mat-icon-button *ngFor="let action of actions" (click)="actionSelected(action.name)">
        <mat-icon matTooltip="{{action.name}}">{{action.icon}}</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: [`
  mat-toolbar{
    position: fixed;
    top: 0;
    z-index: 999;
  }

  .spacer {
      flex: 1 1 auto;
  }
  `]
})
export class ContextualToolbarComponent implements OnInit {

  @Input() count:  number;

  @Input() actions: any[];

  @Output() selectedAction = new EventEmitter<string>();

  @Output() clearSelection = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  actionSelected(action: string): void{
    this.selectedAction.emit(action);
  }

  clear(): void{
    this.clearSelection.emit();
  }

}
