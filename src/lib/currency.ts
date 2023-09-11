/**
 * ex.: convertToCurrency(1422.05) -> '$1,422'
 */
export function convertToCurrency(amount: number, maxDigits = 0) {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: maxDigits,
  })
}
