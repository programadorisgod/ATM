import { useContext } from 'react'
import { GlobalStateContext } from '../../context/contextGlobal'

export default function KeyBoard() {
  const { setGlobalState } = useContext(GlobalStateContext)

  const key: Array<number | string> = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, '000']
  const buttons: Array<string> = ['Enter', 'Clear', '', 'Cancel']

  const keyboard = key.map((key, index) => {
    return (
      <div
        className="bg-white text-center text-pretty rounded-sm w-[30px] h-6 cursor-pointer"
        key={index}
      >
        {key}
      </div>
    )
  })

  const keyboardButtons = buttons.map((button, index) => {
    return (
      <div
        onClick={() => handleKey(button)}
        className={`${
          button === 'Enter'
            ? 'bg-green-600'
            : button === 'Clear'
            ? 'bg-yellow-500'
            : button === 'Cancel'
            ? 'bg-red-600'
            : 'bg-[#cfc8cf]'
        } text-center text-pretty rounded-sm w-[82px] h-6 cursor-pointer button_option `}
        key={index}
      >
        {button}
      </div>
    )
  })

  const handleKey = (key: number | string) => {
    if (key === 'Clear' || key === 'Enter') {
      setGlobalState({ errorMessage: '', bankNotes: [] })
      return
    }

    if (key === 'Cancel') {
      setGlobalState({ errorMessage: '', bankNotes: [] })
      const button: HTMLButtonElement | null =
        document.querySelector('.withdraw')
      button?.click()
    }
  }

  return (
    <div className="bg-[#a69fa3] w-full h-32 flex justify-center items-center select-none options">
      <div className="shadow-neo w-48 p-1 h-[115px] grid grid-cols-[repeat(2,minmax(0,3fr))] gap-4 bg-[#e0e0e0]">
        <div className="grid grid-cols-3 gap-x-3 gap-y-1 ">{keyboard}</div>
        <div className="grid grid-cols-1 gap-1 ">{keyboardButtons}</div>
      </div>
    </div>
  )
}
