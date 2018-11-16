import { Component } from '@angular/core';

@Component({
  selector: 'nm-backdrop-front-layer-content',
  template: `<ng-content></ng-content>`,
  styles: [`
    :host{
        width: 100%;
    }
  `]
})
export class BackdropFrontLayerContentComponent {
   
}