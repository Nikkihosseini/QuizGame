export const initialState = {
  questions: [],
  filteredQuestions: [],
  currentQuestion: 0,
  score: 0,
  showScore: false,
  settings: {
    category: "animals",
    difficulty: "easy",
    numberOfQuestions: 5
  },
  status: "setup", // setup | playing | finished
  feedback: null   // "correct" | "wrong" | null
};

export function quizReducer(state, action) {
  switch (action.type) {
    case "SET_QUESTIONS":
      return { ...state, questions: action.payload };

    case "SET_SETTINGS":
      return { ...state, settings: action.payload };
  
    case "START_GAME":
      return {
        ...state,
        filteredQuestions: state.questions
          .filter(q => q.category.toLowerCase() === state.settings.category.toLowerCase())
          .filter(q => q.difficulty.toLowerCase() === state.settings.difficulty.toLowerCase())
          .slice(0, Number(state.settings.numberOfQuestions)),
        status: "playing",
        currentQuestion: 0,
        score: 0,
        showScore: false,
        feedback: null
      }
     
  

    case "ANSWER_QUESTION":
      const currentQ = state.filteredQuestions[state.currentQuestion];
      const isCorrect = currentQ.correct_answer === action.payload;

      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        feedback: isCorrect ? "correct" : "wrong"
      };

    case "NEXT_QUESTION":
      const nextIndex = state.currentQuestion + 1;
      return {
        ...state,
        currentQuestion: nextIndex,
        feedback: null,
        showScore: nextIndex >= state.filteredQuestions.length,
        status: nextIndex >= state.filteredQuestions.length ? "finished" : "playing"
      };

    case "RESET":
      return { ...initialState, questions: state.questions };

    default:
      return state;
  }
}

