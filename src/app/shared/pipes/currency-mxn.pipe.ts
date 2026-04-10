import { Pipe, PipeTransform } from '@angular/core';

/**
 * Formats a numeric value as Mexican Peso currency (MXN).
 *
 * Usage in templates: {{ amount | currencyMxn }}
 * Output example: "$1,234.56 MXN"
 */
@Pipe({
  name: 'currencyMxn',
  standalone: true,
})
export class CurrencyMxnPipe implements PipeTransform {
  private formatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  transform(value: number | null | undefined): string {
    if (value == null) return '$0.00 MXN';
    return `${this.formatter.format(value)} MXN`;
  }
}
