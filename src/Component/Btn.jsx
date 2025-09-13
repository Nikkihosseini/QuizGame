

export default function Btn({name, svg, handleStart}){
    return(
        <>
            <div onClick={handleStart} className="flex items-center justify-center gap-x-2 text-xl bg-red-750 hover:bg-red-850 rounded-2xl w-60 text-secondary-color p-3 cursor-pointer transition-all">
                <span>{name}</span>
                <span className="material-symbols-outlined text-2xl text-yellow-300 mb-1.5">{svg}</span>
            </div>
        </>
    )
}