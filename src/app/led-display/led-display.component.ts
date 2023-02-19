import { Component, Input } from '@angular/core';

interface Led {
  top: boolean;
  topRight: boolean;
  bottomRight: boolean;
  bottom: boolean;
  bottomLeft: boolean;
  topLeft: boolean;
  middle: boolean;
}

const ZERO: Led = {
  top: true,
  topRight: true,
  bottomRight: true,
  bottom: true,
  bottomLeft: true,
  topLeft: true,
  middle: false,
};

const ONE: Led = {
  top: false,
  topRight: true,
  bottomRight: true,
  bottom: false,
  bottomLeft: false,
  topLeft: false,
  middle: false,
};

const TWO: Led = {
  top: true,
  topRight: true,
  bottomRight: false,
  bottom: true,
  bottomLeft: true,
  topLeft: false,
  middle: true,
};

const THREE: Led = {
  top: true,
  topRight: true,
  bottomRight: true,
  bottom: true,
  bottomLeft: false,
  topLeft: false,
  middle: true,
};

const FOUR: Led = {
  top: false,
  topRight: true,
  bottomRight: true,
  bottom: false,
  bottomLeft: false,
  topLeft: true,
  middle: true,
};

const FIVE: Led = {
  top: true,
  topRight: false,
  bottomRight: true,
  bottom: true,
  bottomLeft: false,
  topLeft: true,
  middle: true,
};

const SIX: Led = {
  top: true,
  topRight: false,
  bottomRight: true,
  bottom: true,
  bottomLeft: true,
  topLeft: true,
  middle: true,
};

const SEVEN: Led = {
  top: true,
  topRight: true,
  bottomRight: true,
  bottom: false,
  bottomLeft: false,
  topLeft: false,
  middle: false,
};

const EIGHT: Led = {
  top: true,
  topRight: true,
  bottomRight: true,
  bottom: true,
  bottomLeft: true,
  topLeft: true,
  middle: true,
};

const NINE: Led = {
  top: true,
  topRight: true,
  bottomRight: true,
  bottom: true,
  bottomLeft: false,
  topLeft: true,
  middle: true,
};

const LedMap = new Map([
  ['0', ZERO],
  ['1', ONE],
  ['2', TWO],
  ['3', THREE],
  ['4', FOUR],
  ['5', FIVE],
  ['6', SIX],
  ['7', SEVEN],
  ['8', EIGHT],
  ['9', NINE],
]);

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
      this._digits = Array(this.numberOfDigits).fill(null);
      this._digits[this._digits.length - 1] = ZERO;
      return;
    }
    // Otherwise, set the value
    this._value = roundedValue;
    // Split the value into an array of digits
    this._digits = Array(this.numberOfDigits).fill(null);
    this._value
      .toString()
      .split('')
      .forEach((digit, index) => {
        this._digits[this._digits.length - 1 - index] = LedMap.get(digit);
      });
  }

  protected _value: number = 0;
  protected _digits: (Led | null | undefined)[] = [];
}
