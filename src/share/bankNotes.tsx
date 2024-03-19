import { useEffect, useMemo, useState } from 'react'
import formatBankNotes from '../utils/fortmatBankNotes'

export default function BankNotes({ bankNotes }: { bankNotes: Array<number> }) {
  const bankNotesNumber: Array<string> = useMemo(
    () => ['10k', '20k', '50k', '100k'],
    []
  )

  const [imageUrls, setImageUrls] = useState<string[]>([])
  const [imageLoaded, setImageLoaded] = useState<boolean>(false)

  useEffect(() => {
    Promise.all(
      bankNotesNumber.map((note) =>
        import(`../assets/${note}.jpg`).then((image) => image.default)
      )
    ).then(setImageUrls)
  }, [bankNotesNumber])

  const bankNotesImages = bankNotes.map((bankNote: number, index: number) => {
    return (
      bankNote > 0 && (
        <>
          <picture key={index} className="w-full">
            <source
              srcSet={`/src/assets/${bankNotesNumber[index]}.webp" type="image/wepb`}
            />
            <img
              loading="lazy"
              className="w-ful h-full"
              src={imageUrls[index]}
              alt={imageLoaded ? 'imagen billete' : ''}
              onLoad={() => setImageLoaded(true)}
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
