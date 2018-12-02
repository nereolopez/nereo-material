import { Component } from '@angular/core';

@Component({
  selector: 'nm-backdrop-front-layer-subtitle',
  template: `<ng-container>
              <ng-content select="mat-icon" class="subtitle-icon"></ng-content>
              <ng-content select="span"></ng-content>
              <span class="spacer"></span>
              <ng-content select="button"></ng-content>
             </ng-container>`,
  styles: [`
    :host{
      align-items: center;
      display: flex;
      flex-direction: row;
      margin: 12px 16px;      
      width: auto;
    }
    
    :host /deep/ mat-icon{
      margin-right: 8px;
    }

    :host /deep/ span {
      font-size: 1.2rem;
    }

    :host /deep/ .spacer {
      flex: 1 1 auto;
    }
  `]
})
export class BackdropFrontLayerSubtitleComponent {
   
}
