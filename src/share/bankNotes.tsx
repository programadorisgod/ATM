import formatBankNotes from '../utils/fortmatBankNotes'

export default function BankNotes({ bankNotes }: { bankNotes: Array<number> }) {
  const bankNotesNumber: Array<string> = ['10k', '20k', '50k', '100k']
  console.log(bankNotes[0])

  const bankNotesImages = bankNotes.map((bankNote: number, index: number) => {
    return (
      bankNote > 0 && (
        <>
          <picture key={index} className="w-full">
            <source
              srcSet={`src/assets/${bankNotesNumber[index]}.webp" type="image/wepb`}
            />
            <img
              className="w-ful h-full"
              src={`src/assets/${bankNotesNumber[index]}.jpg`}
              alt="imagen billete"
            />
          </picture>
          <span className="font-bold">
            ({formatBankNotes(bankNotes[index])})
          </span>
        </>
      )
    )
  })

  return bankNotesImages
}
