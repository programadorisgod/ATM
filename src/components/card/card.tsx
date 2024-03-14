import cardSvg from '../../assets/svg/card.svg'

export default function CardSlot() {
  return (
    <div className="flex flex-row select-none">
      <div className="bg-[#aea6a6] w-36 h-10 flex justify-center items-center gap-1">
        <div className="w-14 h-2 border border-stone-500 border-solid shadow-card"></div>
        <div className="rounded w-2 h-2 bg-yellow-300"></div>
      </div>
      <div className="bg-[#787174] w-44 h-10 flex justify-center items-center gap-2">
        <div className="w-14 h-2 border-2 border-stone-300 border-solid shadow-card "></div>
        <picture className='cursor-pointer'>
          <img width={18} src={cardSvg} alt="Card" />
        </picture>
      </div>
    </div>
  )
}
