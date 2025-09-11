import QuizTopic from "../Component/QuizTopic"

export default function Home(){
    return(
        <>
             <div className="flex flex-col items-center justify-center w-screen h-screen gap-12 uppercase">
                <div>
                    <h1 className="text-5xl">fun quiz game!</h1>
                </div>
                <div className="flex items-center gap-5">
                    <QuizTopic color='#25c45d' svg='cruelty_free' topic='Animals' />
                    <QuizTopic color='#377feb' svg='sports_soccer' topic='Sport' />
                    <QuizTopic color='#6651d5' svg='science' topic='science' />
                    <QuizTopic color='#d72638' svg='manufacturing' topic='History' />
                </div>
                <div>
                    <div>
                        <span>Difficulty:</span>
                        <select name="Difficulty" id="Difficulty">
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <div>
                        <span>Question:</span>
                        <select name="Question" id="Question">
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                        </select>
                    </div>
                </div>
                <div>
                    <span>Start Game</span>
                    <span className="material-symbols-outlined">flag</span>
                </div>
             </div>
        </>
    )
}