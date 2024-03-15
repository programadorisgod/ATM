import React, { useContext, useState } from 'react'
import withDraw from './withdrawal.service'
import { GlobalStateContext } from '../../context/contextError'

export default function DifferentWithdrawals() {
  const [inputValue, setInputValue] = useState<number>(10000)
  const { setGlobalState } = useContext(GlobalStateContext)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value)
    setInputValue(value)
  }

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (inputValue < 10000 || inputValue > 2700000) {
      setGlobalState({
        errorMessage: 'Por favor, ingrese un valor entre 10.000 y 2.700.000',
      })
    }

    if (inputValue % 10000 !== 0) {
      setGlobalState({
        errorMessage:
          'Por favor, ingrese un valor múltiplo de 10.000. Recuerde que el cajero solo dispone de billetes de: 10.000, 20.000, 50.000 y 100.000',
      })
    }

    withDraw(inputValue)
  }

  return (
    <div className="bg-slate-700 h-[176px] w-72">
      <form
        className="flex flex-col justify-center items-center gap-4"
        onSubmit={handleOnSubmit}
      >
        <label className="text-center text-slate-200 font-bold mt-5 flex flex-col items-center justify-center">
          Ingrese el valor:
          <input
            type="number"
            min={10000}
            max={2700000}
            className="outline-none rounded-md w-40 p-1 mt-2 text-black text-center|"
            placeholder="10000"
            onChange={handleInputChange}
          />
        </label>

        <button className="w-20 h-8 rounded-lg bg-slate-50">Retirar</button>
      </form>
    </div>
  )
}
