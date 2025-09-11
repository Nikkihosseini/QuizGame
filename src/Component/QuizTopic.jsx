

export default function QuizTopic({svg,topic,color}){
    return(
        <>
            <div className='flex flex-col items-center gap-3 text-secondary-color w-[110px] aspect-square p-2 rounded-xl cursor-pointer' style={{backgroundColor: color }}>
                <span className="material-symbols-outlined text-6xl">{svg}</span>
                <span className="text-lg">{topic}</span>
            </div>
        </>
    )
}