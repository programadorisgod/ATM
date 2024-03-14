export default function formatValue(value: number | string) {
  if (typeof value === 'string') return value
  return value.toLocaleString('en-ES', {
    currency: 'COP',
    maximumFractionDigits: 0,
  })
}
