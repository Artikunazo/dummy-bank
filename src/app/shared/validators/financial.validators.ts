import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Validates that a numeric form control value is >= the given minimum.
 *
 * @param min - The minimum allowed value (inclusive).
 */
export function minAmount(min: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = Number(control.value);
    if (control.value === null || control.value === '' || isNaN(value)) return null;
    return value >= min ? null : { minAmount: { min, actual: value } };
  };
}

/**
 * Validates that a numeric form control value is <= the given maximum.
 *
 * @param max - The maximum allowed value (inclusive).
 */
export function maxAmount(max: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = Number(control.value);
    if (control.value === null || control.value === '' || isNaN(value)) return null;
    return value <= max ? null : { maxAmount: { max, actual: value } };
  };
}
