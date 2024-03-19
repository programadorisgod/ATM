import { useContext } from 'react'
import { StepScreenProps } from '../../types/screen'
import { GlobalStateContext } from '../../context/contextGlobal'
import retirarImage from '../../assets/retirar.webp'
export default function StepScreen({ handleWithDraw }: StepScreenProps) {
  const { setGlobalState } = useContext(GlobalStateContext)
  const handleClick = () => {
    setGlobalState({ errorMessage: '', bankNotes: [] })
    handleWithDraw()
  }
  return (
    <div className="h-[215px] w-full border-4 border-black rounded relative">
      <div className="w-full h-full bg-white">
        <picture>
          <img
            className="object-contain w-full h-full "
            src={retirarImage}
            alt="imagen de pasos a seguir para retirar"
          />
        </picture>
      </div>
      <button
        className="withdraw bg-[#FED963] rounded-md  w-16 h-[25px]  absolute left-12 bottom-[1px]"
        onClick={handleClick}
      >
        Retirar
      </button>
    </div>
  )
}
