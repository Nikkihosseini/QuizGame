import './index.css'
import Home from "./Pages/Home"
import QuestionPage from "./Pages/QuestionPage"
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { QuizProvider } from "./Component/Context/QuizContext";



function App() {

  return (
    <>
    <QuizProvider>
    <Router>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/QuestionPage' element={<QuestionPage/>}/>
      
      </Routes>
    </Router>
    </QuizProvider>
    </>
  )
}

export default App
