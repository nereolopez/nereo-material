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

    frontLayer.style.top = (backLayer.offsetHeight - this.defaultMargin) + 'px';
  }

  public conceal(){
    let frontLayer = this.getFrontLayer();
    frontLayer.style.top = this.backLayerMinHeight + 'px';
  }

  private getBackLayer(): HTMLElement {
    return <HTMLElement>document.querySelector('nm-backdrop-back-layer')
  }

  private getFrontLayer(): HTMLElement {
    return <HTMLElement>document.querySelector('nm-backdrop-front-layer');
  }

}
