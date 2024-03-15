/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, createContext, useState } from 'react'

export const GlobalStateContext = createContext({
  globalState: { errorMessage: ''  },
  setGlobalState: (value: { errorMessage: string }) => {},
})

type GlobalStateProviderProps = {
  children: ReactNode
}

const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  const [globalState, setGlobalState] = useState({
    errorMessage: '',
  })

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalStateProvider
