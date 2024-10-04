import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Profile from "./Pages/Profile"
import NotFound from "./Pages/NotFound"
import Register from "./Pages/Register"


function App() {


  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="me" element={<Profile/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>


    </>
  )
}

export default App
