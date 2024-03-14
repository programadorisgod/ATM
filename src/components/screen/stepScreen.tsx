type StepScreenProps = {
  handleWithDraw: () => void
}
export default function StepScreen({ handleWithDraw }: StepScreenProps) {
  return (
    <div className="h-[215px] w-full border-4 border-black rounded relative">
      <div className="w-full h-full bg-white">
        <picture>
          <img
            className="object-contain w-full h-full "
            src="/src/assets/retirar.webp"
            alt="imagen de pasos a seguir para retirar"
          />
        </picture>
      </div>
      <button className=" bg-[#FED963] rounded-md  w-16 h-[25px]  absolute left-12 bottom-[1px]" onClick={() => handleWithDraw()}>
        Retirar
      </button>
    </div>
  )
}
