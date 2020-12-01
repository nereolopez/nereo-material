import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackdropComponent } from './backdrop.component';
import { BackdropBackLayerComponent } from './backdrop-back-layer.component';
import { BackdropBackLayerContentComponent } from './backdrop-back-layer-content.component';
import { BackdropBackLayerToolbarComponent } from './backdrop-back-layer-toolbar.component';
import { BackdropFrontLayerComponent } from './backdrop-front-layer.component';
import { BackdropFrontLayerSubtitleComponent } from './backdrop-front-layer-subtitle.component';
import { BackdropFrontLayerContentComponent } from './backdrop-front-layer-content.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BackdropComponent, 
    BackdropBackLayerComponent, 
    BackdropBackLayerContentComponent, 
    BackdropBackLayerToolbarComponent, 
    BackdropFrontLayerComponent,
    BackdropFrontLayerSubtitleComponent,
    BackdropFrontLayerContentComponent,
  ],
  exports: [
    BackdropComponent, 
    BackdropBackLayerComponent, 
    BackdropBackLayerContentComponent, 
    BackdropBackLayerToolbarComponent, 
    BackdropFrontLayerComponent,
    BackdropFrontLayerSubtitleComponent,
    BackdropFrontLayerContentComponent,
  ]
})
export class BackdropModule { }