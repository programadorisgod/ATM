export default function withDraw(amount: number) {
  const BANKNOTES: number[] = [10000, 20000, 50000, 100000]

  const neededBanknotes: number[] = []

  let count: number = 0

  if (amount < 10000) return 'Invalid amount, please enter valid value'

  for (let i = 0; i < BANKNOTES.length; i++) {
    if (i == 3 && count < amount) {
      i = 0
    }
    for (let j = i; j < BANKNOTES.length; j++) {
      if (count + BANKNOTES[j] > amount) {
        continue
      }
      neededBanknotes.push(BANKNOTES[j])
      count += BANKNOTES[j]

      if (count === amount) break
    }
  }

  return neededBanknotes.sort()
}
