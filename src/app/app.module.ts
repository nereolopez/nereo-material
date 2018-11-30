import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule, MatTableModule, MatCheckboxModule, MatListModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';

import { ContextualToolbarModule } from '../../projects/nm/src/lib/contextual-toolbar.module';

import { BackdropModule, FabSpeedDialModule } from 'projects/nm/src/public_api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ContextualToolbarModule,
    BackdropModule,
    FabSpeedDialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
