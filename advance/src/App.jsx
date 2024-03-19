import { useState } from 'react'
import Login from "./Components/Login"
import Signup from './Components/Signup'
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from "./Components/Home"
import BookDetails from './Components/BookDetails';
import FoodDetails from './Components/FoodDetails';
import Bookevent from './Components/Bookevent'
import EventDetails from './Components/EventDetails';
import ViewBookedEvents from './Components/ViewBookedEvents';
import Sidebar from './Components/Sidebar';
import AddTheme from './Components/Addtheme';
import Edittheme from './Components/Edittheme';
import Addaddons from './Components/Addaddons';
import Editaddons from './Components/Editaddons';
import Adminview from './Components/Adminview';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path='/book' element={<Bookevent/>}/>
    <Route path='/eventdetails/:id' element={<EventDetails/>}/>
    <Route path='/bookdetails' element={<BookDetails/>}/>
    <Route path='/fooddetails' element={<FoodDetails/>}/>
    <Route path='/view' element={<ViewBookedEvents/>}/>
    <Route path='/side' element={<Sidebar/>}/>
    <Route path='/addtheme' element={<AddTheme/>}/>
    <Route path='/edittheme' element={<Edittheme/>}/>
    <Route path='/add-add-ons' element={<Addaddons/>}/>
    <Route path='/edit-add-ons' element={<Editaddons/>}/>
    <Route path='/adminview' element={<Adminview/>}/>
    </Routes>
    </BrowserRouter>
   
    )
  }
  
  export default App
  