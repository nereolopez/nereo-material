import { Component } from '@angular/core';

@Component({
  selector: 'nm-backdrop-back-layer',
  template: `
    <ng-content select="nm-backdrop-back-layer-toolbar"></ng-content>
    <ng-content select="nm-backdrop-back-layer-content"></ng-content>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 56px;
      padding-bottom: 16px;
      width: 100%;
    }
  `]
})
export class BackdropBackLayerComponent { }