import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule, MatTableModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';

import { ContextualToolbarModule } from '../../projects/nm/src/lib/contextual-toolbar.module';
import { BackdropComponent } from './backdrop/backdrop.component';
import { BackgropFrontLayerComponent } from './backgrop-front-layer/backgrop-front-layer.component';
import { BackdropBackLayerComponent } from './backdrop-back-layer/backdrop-back-layer.component';
import { BackdropFrontLayerComponent } from './backdrop-front-layer/backdrop-front-layer.component';

@NgModule({
  declarations: [
    AppComponent,
    BackdropComponent,
    BackgropFrontLayerComponent,
    BackdropBackLayerComponent,
    BackdropFrontLayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ContextualToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
