export default function withDraw(amount: number): Array<number> {
  const BANKNOTES: number[] = [10000, 20000, 50000, 100000]

  const neededBanknotes: number[] = [0, 0, 0, 0]

  let count: number = 0

  for (let i = 0; i < BANKNOTES.length; i++) {
    if (i == 3 && count < amount) {
      i = 0
    }
    for (let j = i; j < BANKNOTES.length; j++) {
      if (count + BANKNOTES[j] > amount) {
        continue
      }
      neededBanknotes[j] += 1
      count += BANKNOTES[j]

      if (count === amount) break
    }
  }
 
  return neededBanknotes
}
