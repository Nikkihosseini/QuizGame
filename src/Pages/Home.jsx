

export default function Home(){
    return(
        <>
             <div>
                <div>
                    <h1>fun quiz game</h1>
                </div>
                <div>
                    <div>
                        <span className="material-symbols-outlined">cruelty_free</span>
                        <span>Animals</span>
                    </div>
                    <div>
                        <span className="material-symbols-outlined">sports_soccer</span>
                        <span>Sport</span>
                    </div>
                    <div>
                        <span className="material-symbols-outlined">science</span>
                        <span>Science</span>
                    </div>
                    <div>
                        <span className="material-symbols-outlined">manufacturing</span>
                        <span>History</span>
                    </div>
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