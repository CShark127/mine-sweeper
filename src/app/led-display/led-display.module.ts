import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedDisplayComponent } from './led-display.component';

@NgModule({
  declarations: [LedDisplayComponent],
  imports: [CommonModule],
  exports: [LedDisplayComponent],
})
export class LedDisplayModule {}
