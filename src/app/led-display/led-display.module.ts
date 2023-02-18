import { NgModule } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { LedDisplayComponent } from './led-display.component';

@NgModule({
  declarations: [LedDisplayComponent],
  imports: [NgForOf],
  exports: [LedDisplayComponent],
})
export class LedDisplayModule {}
