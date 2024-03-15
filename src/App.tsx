import { useContext } from 'react'
import BankNoteSlot from './components/banknoteSlot/banknoteSlot'
import CardSlot from './components/card/card'
import KeyBoard from './components/keyboard/keyboard'
import Screen from './components/screen/screen'
import AlertComponent from './share/alert'
import { GlobalStateContext } from './context/contextGlobal'
import BankNotes from './share/bankNotes'
import './App.css'
function App() {
  const { globalState } = useContext(GlobalStateContext)
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <main className="flex flex-col justify-center items-center h-screen p-2 ">
        {globalState.errorMessage && (
          <AlertComponent text={globalState.errorMessage} />
        )}
        <div className="bank_notes_container flex justify-center items-center gap-4">
          <section>
            <div className="h-[600px] w-96 border-[19px] border-[#ffd44b] border-solid">
              <div className="h-full w-full border-[18px] border-solid border-[#7c6458]">
                <div className="h-full w-full bg-[#cfc8cf]">
                  <section className="bg-[#ab9d9f] w-full h-72 flex flex-col items-center">
                    <Screen />
                  </section>

                  <section>
                    <CardSlot />
                  </section>

                  <section>
                    <KeyBoard />
                  </section>

                  <section>
                    <BankNoteSlot />
                  </section>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="text-slate-200 sm:w-[550px] lg:w-40 h-20 items-center flex  justify-center gap-1  sm:flex-row lg:flex-col">
              {globalState.bankNotes.length > 1 && (
                <BankNotes bankNotes={globalState.bankNotes} />
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
