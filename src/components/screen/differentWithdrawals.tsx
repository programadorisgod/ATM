export default function DifferentWithdrawals() {
  return (
    <div className="bg-slate-700 h-[176px]">
      <form className="flex flex-col justify-center items-center gap-4">
        <label className="text-center text-slate-200 font-bold mt-5">
          Ingrese el valor:
          <input
            type="number"
            min={10000}
            className="outline-none rounded-md p-1 mt-2 text-black text-center"
            placeholder="10000"
          />
        </label>
        <button className="w-20 h-8 rounded-lg bg-slate-50">Retirar</button>
      </form>
    </div>
  )
}
