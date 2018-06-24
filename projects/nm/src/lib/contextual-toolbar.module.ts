import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule, MatMenuModule } from '@angular/material';

import { ContextualToolbarComponent } from './contextual-toolbar.component';

@NgModule({
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
  ],
  declarations: [ContextualToolbarComponent],
  exports: [ContextualToolbarComponent]
})
export class ContextualToolbarModule { }