import React, { useReducer, useEffect, useState } from "react";
import QuizTopic from "../Component/QuizTopic"
import SelectField from '../Component/SelectField'
import Btn from '../Component/Btn'
import { quizReducer, initialState } from "../Component/Reducer/quizReducer";
import questionsData from "../../public/data/questionsData.json";

export default function Home(){

  const [state, dispatch] = useReducer(quizReducer,initialState)

  useEffect(()=>{
    dispatch({type:"SET_QUESTIONS", payload: questionsData})
  }, [])

  const handleStart = () => {
    dispatch({ type: "START_GAME" });
    console.log('its Ok')
  };
  const handleCategory = (topic) => {
  dispatch({
    type: "SET_SETTINGS",
    payload: { ...state.settings, category: topic}
  });
  console.log(topic)
};
  
  if (state.status === "setup"){

    return(
       <>
           <div className="flex flex-col items-center justify-center w-screen h-screen gap-12 uppercase">
              <div>
                  <h1 className="text-5xl">fun quiz game!</h1>
              </div>
              <div className="flex items-center gap-5">
                  <QuizTopic onClick={()=>handleCategory('Animals')} color='#25c45d' hoverColor='#1fa74e' svg='cruelty_free' topic='Animals'/>

                  <QuizTopic onClick={()=>handleCategory('Sport')} color='#377feb' hoverColor='#2e6cd1' svg='sports_soccer' topic='Sport'/>

                  <QuizTopic onClick={()=>handleCategory('science')} color='#6651d5' hoverColor='#5644b3' svg='science' topic='science'/>

                  <QuizTopic onClick={()=>handleCategory('History')} color='#fc5537' hoverColor='#e04b2f' svg='manufacturing' topic='History'/>
              </div>
              <div className="flex flex-col items-end gap-4">
                  <SelectField 
                    onChange={(e) =>{
                      dispatch({
                      type: "SET_SETTINGS",
                      payload: { ...state.settings, difficulty: e.target.value}
                      });
                      console.log(e.target.value)
                    }}
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
                      onChange={(e) =>{
                        dispatch({
                        type: "SET_SETTINGS",
                        payload: { ...state.settings, difficulty: e.target.value}
                        });
                        console.log(e.target.value)
                      }}
                    id='Question'
                    label="Question:"
                    name="Question"
                    options={[
                      { value: "5", label: "5" },
                      { value: "10", label: "10" },
                      { value: "15", label: "15" },
                    ]}
                  />
              </div>
              <Btn handleStart={handleStart} name='Start Game' svg='flag'/>
           </div>
      </>
    )

  }

}