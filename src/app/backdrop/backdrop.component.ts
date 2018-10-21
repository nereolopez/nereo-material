import { Component, OnInit, ViewChild } from '@angular/core';
import { BackdropBackLayerComponent } from '../backdrop-back-layer/backdrop-back-layer.component';

@Component({
  selector: 'nm-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent implements OnInit {

  private defaultMargin: number = 16;
  private backLayerMinHeight: number = 56;

  constructor() { }

  ngOnInit() {
  }

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

  // TODO Refactor animations to single function
  private animateFrontLayerDown(frontLayer: HTMLElement, from: number, to: number){
    let pos = from;
    let interval = setInterval(frame, 10);

    function frame() {
        if (pos >= to) {
            clearInterval(interval);
        } else {
            pos = to > from ? pos + 10 : pos -10;   
            frontLayer.style.top = pos + 'px'; 
        }
    }
  }

  private animateFrontLayerUp(frontLayer: HTMLElement, from: number, to: number){
    let pos = from;
    let interval = setInterval(frame, 10);

    function frame() {
        if (pos <= to) {
            clearInterval(interval);
        } else {
            pos = to > from ? pos + 10 : pos -10;   
            frontLayer.style.top = pos + 'px'; 
        }
    }
  }

}
