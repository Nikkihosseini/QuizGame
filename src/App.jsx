import './index.css'
import Home from "./Pages/Home"
import QuestionPage from "./Pages/QuestionPage"
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <Router>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/QuestionPage' element={<QuestionPage/>}/>
      
      </Routes>
    </Router>
    </>
  )
}

export default App
