import { Component } from '@angular/core';

@Component({
  selector: 'nm-backdrop-front-layer-subtitle',
  template: `<ng-content></ng-content>`,
  styles: [`
    :host{
      display: flex;
      margin-bottom: 12px;
      width: 100%;
    }
  `]
})
export class BackdropFrontLayerSubtitleComponent {
   
}
