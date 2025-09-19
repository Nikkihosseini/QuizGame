import { createContext, useReducer } from "react";
import { quizReducer, initialState } from "../Reducer/quizReducer";

export const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
