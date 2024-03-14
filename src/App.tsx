import BankNoteSlot from './components/banknoteSlot/banknoteSlot'
import CardSlot from './components/card/card'
import KeyBoard from './components/keyboard/keyboard'
import Screen from './components/screen/screen'
function App() {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      <main className="flex flex-col justify-center items-center h-screen">
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
      </main>
    </>
  )
}

export default App
