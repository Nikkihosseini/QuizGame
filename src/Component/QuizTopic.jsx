import { useState } from "react";

export default function QuizTopic({svg, topic, color, hoverColor, onClick}){

    const [bg, setBg] = useState(color);

    return(
        <>
            <div onClick={onClick} className='flex flex-col items-center gap-3 text-secondary-color w-[110px] aspect-square p-2 rounded-xl cursor-pointer transition-all' style={{backgroundColor: bg }}
             onMouseEnter={() => setBg(hoverColor)}
             onMouseLeave={() => setBg(color)}>
                <span className="material-symbols-outlined text-6xl">{svg}</span>
                <span className="text-lg">{topic}</span>
            </div>
        </>
    )
}