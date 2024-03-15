import { Alert } from 'flowbite-react/lib/esm/components/Alert'
import { useContext, useState } from 'react'
import { HiInformationCircle } from 'react-icons/hi'
import { GlobalStateContext } from '../context/contextGlobal'
type AlertComponentProps = {
  text: string
}

export default function AlertComponent({ text }: AlertComponentProps) {
  const [isVisible, setIsVisible] = useState<boolean>(true)
  const { setGlobalState } = useContext(GlobalStateContext)

  const handleClick = () => {
    setIsVisible(!isVisible)
    setGlobalState({ errorMessage: '', bankNotes: [] })
  }

  return (
    <Alert
      className={`mb-4 text-pretty ${isVisible ? 'block' : 'hidden'} `}
      color="failure"
      icon={HiInformationCircle}
    >
      <span className="font-medium">¡Error!</span> {text}
      <div className="flex">
        <button
          onClick={handleClick}
          type="button"
          className="rounded-lg border border-cyan-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-cyan-700 hover:bg-cyan-800 hover:text-white focus:ring-4 focus:ring-cyan-300 dark:border-cyan-800 dark:text-cyan-800 dark:hover:text-white"
        >
          Dismiss
        </button>
      </div>
    </Alert>
  )
}
