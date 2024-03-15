export default function formatBankNotes(value: number) {
    
  if (value.toString().length > 1 && value.toString().length <= 2) return value

  const newValue = value.toString().split('')[0]
  return parseInt(newValue)
}
