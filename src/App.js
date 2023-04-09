
import React from 'react'
// be capial jemr
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Navigation from "./component/navigation"
//When you import components into your React application, you should also use capitalized names.
//IN THE FOLDER STRUCTURE THE FOLDER NAME LIKE COMPONENT THE FIRST LETTER SHOULD BE IN THE SMALL LETTER
import Home from "./page/home"
import Login from './page/login';
import Signup from './page/signup';
import Chat from './page/chat';

 const App = () => {
  return (
    //When you wrap your React application in a BrowserRouter component, it listens to changes in the URL and updates the state of the application accordingly. 
    <BrowserRouter>
     <Navigation/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/chat' element={<Chat/>} />
     </Routes>
    </BrowserRouter>

  
  )
}
export default App

