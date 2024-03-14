import { useState } from 'react'
import StepScreen from './stepScreen'
import WidthDrawalScreen from './withdrawalScreen'

export default function Screen() {
  const [withDraw, setWithDraw] = useState<boolean>(false)

  const handleWithDraw = () => {
    setWithDraw(!withDraw)
  }
  return (
    <div className="h-[220px] w-72 border-solid mt-12 bg-[#787174] rounded shadow-custom select-none">
      {withDraw ? (
        <WidthDrawalScreen />
      ) : (
        <StepScreen handleWithDraw={handleWithDraw} />
      )}
    </div>
  )
}
