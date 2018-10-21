import { Component, ViewChild } from '@angular/core';
import { BackdropComponent } from './backdrop/backdrop.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(BackdropComponent)
  backdrop: BackdropComponent;

  title = 'app';

  revealBackdrop(){
    this.backdrop.reveal();
  }

  concealBackdrop() {
    this.backdrop.conceal();
  }
}
