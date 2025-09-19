import React, { useReducer, useEffect, useState } from "react";
import QuizTopic from "../Component/QuizTopic"
import SelectField from '../Component/SelectField'
import Btn from '../Component/Btn'
import { quizReducer, initialState } from "../Component/Reducer/quizReducer";
import questionsData from "../../public/data/questionsData.json";
import { useNavigate } from "react-router-dom";

export default function Home(){

  const [state, dispatch] = useReducer(quizReducer,initialState)

  const navigate = useNavigate();


  // 180 questions for quiz (4 categories, 3 difficulties)
  useEffect(()=>{
    dispatch({type:"SET_QUESTIONS", payload: questionsData})
  }, [])

  

  const handleStart = () => {
    dispatch({ type: "START_GAME" });
    console.log('its Ok')
    console.log(state.filteredQuestions)
    console.log("Settings:", state.settings);
    console.log("All Questions:", state.questions);
    navigate("/QuestionPage");
  };
  const handleCategory = (topic) => {
  dispatch({
    type: "SET_SETTINGS",
    payload: { ...state.settings, category: topic}
  });
  console.log(topic)
 };

  useEffect(() => {
  if (state.questions.length === 0) return;

    const filtered = state.questions
     .filter(q => q.category.toLowerCase() === state.settings.category.toLowerCase())
     .filter(q => q.difficulty.toLowerCase() === state.settings.difficulty.toLowerCase())
     .slice(0, Number(state.settings.numberOfQuestions));

    dispatch({ type: "SET_FILTERED_QUESTIONS", payload: filtered });
  }, [state.settings, state.questions.length]);

  
  if (state.status === "setup"){

    return(
       <>
           <div className="flex flex-col items-center justify-center w-screen h-screen gap-12 uppercase">
              <div>
                  <h1 className="text-5xl">fun quiz game!</h1>
              </div>
              <div className="flex items-center gap-5">
                  <QuizTopic onClick={()=>handleCategory('animals')} color='#25c45d' hoverColor='#1fa74e' svg='cruelty_free' topic='Animals'/>

                  <QuizTopic onClick={()=>handleCategory('sport')} color='#377feb' hoverColor='#2e6cd1' svg='sports_soccer' topic='Sport'/>

                  <QuizTopic onClick={()=>handleCategory('science')} color='#6651d5' hoverColor='#5644b3' svg='science' topic='science'/>

                  <QuizTopic onClick={()=>handleCategory('history')} color='#fc5537' hoverColor='#e04b2f' svg='manufacturing' topic='History'/>
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
                        payload: { ...state.settings, numberOfQuestions: Number(e.target.value)}
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