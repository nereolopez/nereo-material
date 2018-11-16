import { Component } from '@angular/core';

@Component({
  selector: 'nm-backdrop-front-layer-content',
  template: `<ng-content></ng-content>`,
  styles: [`
    :host{
        display: flex;
        height: 100%;
        overflow-y: auto;
        width: 100%;
    }
  `]
})
export class BackdropFrontLayerContentComponent {
   
}