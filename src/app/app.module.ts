import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule, MatTableModule, MatCheckboxModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';

import { ContextualToolbarModule } from '../../projects/nm/src/lib/contextual-toolbar.module';
import { BackdropComponent } from './backdrop/backdrop.component';
import { BackdropBackLayerComponent } from './backdrop-back-layer/backdrop-back-layer.component';
import { BackdropFrontLayerComponent } from './backdrop-front-layer/backdrop-front-layer.component';
import { BackdropBackLayerToolbarComponent } from './backdrop-back-layer-toolbar/backdrop-back-layer-toolbar.component';
import { BackdropBackLayerContentComponent } from './backdrop-back-layer-content/backdrop-back-layer-content.component';

@NgModule({
  declarations: [
    AppComponent,
    BackdropComponent,
    BackdropBackLayerComponent,
    BackdropFrontLayerComponent,
    BackdropBackLayerToolbarComponent,
    BackdropBackLayerContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatListModule,
    ContextualToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
