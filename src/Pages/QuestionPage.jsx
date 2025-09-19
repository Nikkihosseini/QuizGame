import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../Component/Context/QuizContext";
import { useNavigate } from "react-router-dom";

export default function QuestionPage() {
  const { state, dispatch } = useContext(QuizContext);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  const questionData = state.filteredQuestions[state.currentQuestion];
  const totalQuestions = state.filteredQuestions.length;

  const handleGoHome = () => {
    dispatch({ type: "RESET" });
    navigate("/");
  };

  useEffect(() => {
    if (!questionData) return;
    const shuffledOptions = [
      ...questionData.incorrect_answers,
      questionData.correct_answer,
    ].sort(() => Math.random() - 0.5);
    setOptions(shuffledOptions);

    setSelectedAnswer(null);
    setShowFeedback(false);
    setTimeLeft(15);
  }, [questionData]);

  useEffect(() => {
    if (!questionData) return;
    if (timeLeft === 0) {
      handleNext();
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, questionData]);

  const handleAnswer = (answer) => {
    if (selectedAnswer) return;
    setSelectedAnswer(answer);
    setShowFeedback(true);

    dispatch({ type: "ANSWER_QUESTION", payload: answer });

    setTimeout(() => handleNext(), 1000);
  };

  const handleNext = () => {
    if (state.currentQuestion + 1 >= totalQuestions) {
      dispatch({ type: "NEXT_QUESTION" });
      return;
    }
    dispatch({ type: "NEXT_QUESTION" });
  };

  
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      {questionData ? (
        <>
          <h2 className="text-2xl font-bold mb-2">
            Question {state.currentQuestion + 1} / {totalQuestions}
          </h2>

          <p
            className="text-xl text-center mb-4"
            dangerouslySetInnerHTML={{ __html: questionData.question }}
          />

          <p className="mb-4 text-lg">⏳ Time left: {timeLeft}s</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-lg">
            {options.map((option, idx) => {
              let bgColor = "bg-white";
              if (showFeedback) {
                if (option === questionData.correct_answer)
                  bgColor = "bg-green-400";
                else if (option === selectedAnswer) bgColor = "bg-red-400";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className={`p-3 rounded-xl shadow ${bgColor} transition-colors duration-300`}
                  dangerouslySetInnerHTML={{ __html: option }}
                  disabled={showFeedback}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center gap-y-5">
            <p className="flex items-center justify-center text-2xl">
                🎉 Quiz Finished! Your score: {state.score} / {totalQuestions}
            </p>
            <div onClick={handleGoHome}  className="flex items-center justify-center gap-x-2 text-xl bg-red-750 hover:bg-red-850 rounded-2xl w-60 text-secondary-color p-3 cursor-pointer transition-all">Home Page</div>
        </div>
      )}
    </div>
  );
}
