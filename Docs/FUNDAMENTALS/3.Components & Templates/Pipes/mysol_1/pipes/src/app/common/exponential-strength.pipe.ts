import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: number, exponent?: number): number {
    return Math.pow(value, (isNaN(exponent) || exponent.length === 0) ? 1 : exponent);
  }

}
