import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule, MatListModule, MatIconModule, MatButtonModule } from '@angular/material';

import { BannerComponent } from './banner.component';

@NgModule({
  imports: [
    BrowserModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [BannerComponent],
  exports: [BannerComponent]
})
export class BannerModule { }