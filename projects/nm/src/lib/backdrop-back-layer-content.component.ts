import { Component } from '@angular/core';

@Component({
  selector: 'nm-backdrop-back-layer-content',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host{
      overflow-y: auto;
    }
  `]
})
export class BackdropBackLayerContentComponent { }