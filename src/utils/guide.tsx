import { useContext } from 'react'
import { ShepherdTourContext } from 'react-shepherd'

export default function Guide() {
  const tour = useContext(ShepherdTourContext)

  return (
    <div>
      <button
        className="button dark bg-gray-200 rounded-lg p-1 text-center"
        onClick={() => tour?.start()}
      >
        Empezar guía
      </button>
    </div>
  )
}
