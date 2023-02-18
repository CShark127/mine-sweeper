import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-led-display',
  templateUrl: './led-display.component.html',
  styleUrls: ['./led-display.component.scss'],
})
export class LedDisplayComponent {
  // TODO: Consider storing the incoming value as well as the constrained value

  @Input() numberOfDigits = 3;
  @Input() set value(value: number) {
    // Round the value to the nearest integer
    const roundedValue = Math.round(value);
    // Get maximum value for the number of digits
    const maxValue = Math.pow(10, this.numberOfDigits) - 1;

    // If greater than the maximum value, set to the maximum value
    if (roundedValue > maxValue) {
      this._value = maxValue;
      return;
    }
    // If less than the minimum value, set to the minimum value
    if (roundedValue < 0) {
      this._value = 0;
      return;
    }
    // Otherwise, set the value
    this._value = roundedValue;
  }

  protected _value: number = 0;
}
