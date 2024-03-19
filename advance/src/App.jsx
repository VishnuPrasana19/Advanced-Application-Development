import { useState } from 'react'
import Login from "./Components/Login"
import Signup from './Components/Signup'
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from "./Components/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/home" element={<Home/>}/>
    
    </Routes>
    </BrowserRouter>
   
    )
  }
  
  export default App
  