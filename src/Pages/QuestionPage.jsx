import { useEffect, useState } from "react";

export default function QuestionPage({ questionData, questionIndex, totalQuestions, dispatch }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);

  // تایمر ۱۵ ثانیه‌ای
  useEffect(() => {
    if (timeLeft === 0) {
      handleNext();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswer = (answer) => {
    if (selectedAnswer) return; // جلوگیری از دوبار انتخاب
    setSelectedAnswer(answer);
    setShowFeedback(true);

    dispatch({ type: "ANSWER_QUESTION", payload: answer });

    // بعد از ۲ ثانیه بریم سوال بعدی
    setTimeout(() => {
      handleNext();
    }, 2000);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setTimeLeft(15);
    dispatch({ type: "NEXT_QUESTION" });
  };

  // گزینه‌ها را می‌ریزیم در آرایه و جواب درست رو جا به جا می‌کنیم
  const options = [...questionData.incorrect_answers, questionData.correct_answer]
    .sort(() => Math.random() - 0.5);

  return (
    <div>
      <h2>Question {questionIndex + 1} / {totalQuestions}</h2>
      <p>{questionData.question}</p>
      <p>Time left: {timeLeft}</p>

      <div>
        {options.map((option, idx) => {
          let bgColor = "white";
          if (showFeedback) {
            if (option === questionData.correct_answer) bgColor = "green";
            else if (option === selectedAnswer) bgColor = "red";
          }
          return (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              style={{ backgroundColor: bgColor, margin: "5px", padding: "10px" }}
              disabled={showFeedback}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
