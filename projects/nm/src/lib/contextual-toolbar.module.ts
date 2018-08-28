import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule, MatMenuModule } from '@angular/material';

import { ContextualToolbarComponent } from './contextual-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
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