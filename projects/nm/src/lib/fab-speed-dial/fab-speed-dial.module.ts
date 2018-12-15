import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule, MatIconModule, MatCardModule } from "@angular/material";
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