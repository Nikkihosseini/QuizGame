import QuizTopic from "../Component/QuizTopic"
import SelectField from '../Component/SelectField'
import Btn from '../Component/Btn'

export default function Home(){

  
    return(
        <>
             <div className="flex flex-col items-center justify-center w-screen h-screen gap-12 uppercase">
                <div>
                    <h1 className="text-5xl">fun quiz game!</h1>
                </div>
                <div className="flex items-center gap-5">
                    <QuizTopic color='#25c45d' hoverColor='#1fa74e' svg='cruelty_free' topic='Animals' />
                    <QuizTopic color='#377feb' hoverColor='#2e6cd1' svg='sports_soccer' topic='Sport' />
                    <QuizTopic color='#6651d5' hoverColor='#5644b3' svg='science' topic='science' />
                    <QuizTopic color='#fc5537' hoverColor='#e04b2f' svg='manufacturing' topic='History' />
                </div>
                <div className="flex flex-col items-end gap-4">
                    <SelectField 
                      id='Difficulty'
                      label="Difficulty:"
                      name="Difficulty"
                      options={[
                        { value: "easy", label: "Easy" },
                        { value: "medium", label: "Medium" },
                        { value: "hard", label: "Hard" },
                      ]}
                    />
                    <SelectField
                       id='Question'
                      label="Question:"
                      name="Question"
                      options={[
                        { value: "10", label: "10" },
                        { value: "15", label: "15" },
                        { value: "20", label: "20" },
                        { value: "25", label: "25" },
                        { value: "30", label: "30" },
                      ]}
                    />
                </div>
                <Btn name='Start Game' svg='flag'/>
             </div>
        </>
    )
}