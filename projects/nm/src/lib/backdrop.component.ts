import { Component } from '@angular/core';

@Component({
  selector: 'nm-backdrop',
  template: `
    <ng-content select="nm-backdrop-back-layer"></ng-content>
    <ng-content select="nm-backdrop-front-layer"></ng-content>
  `,
  styles: [`
    :host {
        width: 100%;
    }
  `]
})
export class BackdropComponent {
  private defaultMargin: number = 16;
  private backLayerMinHeight: number = 56;
  private frontLayerMinHeight:number = 42;

  constructor() { }

  public reveal(){
    let backLayer = this.getBackLayer();
    let frontLayer = this.getFrontLayer();

    let from = frontLayer.offsetTop;
    let to = backLayer.offsetHeight - this.defaultMargin;
    this.animateFrontLayerDown(frontLayer, from, to);
  }

  public conceal(){
    console.log("conceal");
    let frontLayer = this.getFrontLayer();

    let from = frontLayer.offsetTop;
    let to = this.backLayerMinHeight;
    this.animateFrontLayerUp(frontLayer, from, to);
  }

  private getBackLayer(): HTMLElement {
    return <HTMLElement>document.querySelector('nm-backdrop-back-layer')
  }

  private getFrontLayer(): HTMLElement {
    return <HTMLElement>document.querySelector('nm-backdrop-front-layer');
  }

  private getWindowHeight(): number {
    return document.documentElement.clientHeight;
  }

  // TODO Refactor animations to single function
  private animateFrontLayerDown(frontLayer: HTMLElement, from: number, to: number){
    let pos = from;
    let maxPos = this.getWindowHeight() - this.frontLayerMinHeight;

    let interval = setInterval(frame, 3);
  
    function frame() {
      if (pos >= to || pos >= maxPos) {
        if (to >= maxPos){
          frontLayer.style.top = maxPos + 'px';
        }
        else {
          frontLayer.style.top = to + 'px';
        }
        
        clearInterval(interval);
      } else {
        pos = to > from ? pos + 10 : pos -10;   
        frontLayer.style.top = pos + 'px'; 
      }
    }
  }

  private animateFrontLayerUp(frontLayer: HTMLElement, from: number, to: number){
    let pos = from;
    let interval = setInterval(frame, 3);

    function frame() {
        if (pos <= to) {
          frontLayer.style.top = to + 'px';   
          clearInterval(interval);
        } else {
            pos = to > from ? pos + 10 : pos -10;   
            frontLayer.style.top = pos + 'px'; 
        }
    }
  }
}
