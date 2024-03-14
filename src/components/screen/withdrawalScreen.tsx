import { ReactNode, useState } from 'react'
import formatValue from '../../utils/formatValue'
import DifferentWithdrawals from './differentWithdrawals'

export default function WidthDrawalScreen() {
  const [isDifferentWithDrawal, setIsDifferentWithDrawal] =
    useState<boolean>(false)

  const values: Array<number | string> = [
    10000,
    20000,
    50000,
    100000,
    200000,
    500000,
    1000000000,
    'Otro monto',
  ]

  const handleAmountClick = (value: number | string) => {
    if (value === 'Otro monto') {
      setIsDifferentWithDrawal(true)
    }
  }
  const inputValues: Array<ReactNode> = values.map((value, index) => {
    return (
      <button
        key={index}
        className={`${
          value === 'Otro monto' ? 'bg-slate-500' : 'bg-sky-500'
        } w-38 pl-1 text-center pr-1 h-6  rounded-lg text-white`}
        onClick={() => handleAmountClick(value)}
      >
        {formatValue(value)}
      </button>
    )
  })

  return (
    <section className="flex flex-col items-center bg-slate-50 h-[215px] rounded-sm">
      <header>
        <h3 className="text-2xl font-bold mt-2">Monto a retirar</h3>
      </header>
      <main>
        {isDifferentWithDrawal ? (
          <DifferentWithdrawals />
        ) : (
          <div className="grid grid-cols-2 gap-2 mt-6">{inputValues}</div>
        )}
      </main>
    </section>
  )
}
