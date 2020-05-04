import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FabSpeedDialComponent } from "./fab-speed-dial.component";

@NgModule({
    imports: [
      CommonModule,
      MatButtonModule,
      MatIconModule,
      MatCardModule
    ],
    declarations: [FabSpeedDialComponent],
    exports: [FabSpeedDialComponent]
  })
  export class FabSpeedDialModule { }