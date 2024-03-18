/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, createContext, useState } from 'react'

export const GlobalStateContext = createContext({
  globalState: { errorMessage: '', bankNotes: [0] },
  setGlobalState: (_value: {
    errorMessage: string
    bankNotes: Array<number>
  }) => {},
})

type GlobalStateProviderProps = {
  children: ReactNode
}

const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  const [globalState, setGlobalState] = useState({
    errorMessage: '',
    bankNotes: [0],
  })

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalStateProvider
