export default function Screen() {
  return (
    <div className="h-[215px] w-72 border-solid mt-12 bg-[#787174] rounded shadow-custom">
      <div className="h-52 w-full border-4 border-black rounded">
        <div className="w-full h-full bg-white">
          <picture>
            <img
              className="object-contain w-full h-full"
              src="/src/assets/retirar.webp"
              alt="imagen de pasos a seguir para retirar"
            />
          </picture>
        </div>
      </div>
    </div>
  )
}
