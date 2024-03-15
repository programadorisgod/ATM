import { useContext } from 'react'
import './banknoteSlot.css'
import { GlobalStateContext } from '../../context/contextGlobal'
export default function BankNoteSlot() {
  const { globalState } = useContext(GlobalStateContext)


  return (
    <div className="bg-[#f7d565] w-[310px] h-[70px] flex flex-col relative  items-center">
      <div className="w-64 h-11 bg-slate-300 flex justify-center pt-1">
        <div className="w-36 h-5 border-4 shadow-custom ">
          {globalState.bankNotes.length > 1 &&  (
            <div
              className="w-20 h-5 bg-green-600 absolute bottom-8 left-[120px] rotate_bank_note text-center"
            >$</div>
          )}
        </div>
      </div>
    </div>
  )
}
