import { Component } from '@angular/core';

@Component({
  selector: 'nm-backdrop-front-layer',
  template: `
    <div class="nm-backdrop-front-layer-content">
      <ng-content select="nm-backdrop-front-layer-subtitle"></ng-content>
      <ng-content select="nm-backdrop-front-layer-content"></ng-content>
    </div>
  `,
  styles: [`
    :host{
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        bottom: 0;
        display: flex;
        position: absolute;
        top: 56px;
        width: 100%;
    }
  `]
})
export class BackdropFrontLayerComponent { }