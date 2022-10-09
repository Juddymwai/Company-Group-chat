// import logo from './logo.svg';
// import './App.css';
import React,{ useState,useEffect} from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import NavBar from "./NavBar";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() =>{
    fetch('/me').then((resp) =>{
      if (resp.ok){
        resp.json().then ((user)=> setUser(user));
      }
    })
  }, []
  );
  return (
    <div>
      <router>
        <NavBar/>
        {user ? (
        <Routes>
          <Route exact path="/" element={<Home setUser={setUser}/>}/> 
          </Routes>
        ): (
          <Routes>

            <Route exact path="/signup" element={<SignUp setUser={setUser}/>}/>
            <Route exact path="/login" element={<Login setUser={setUser}/>}/>
          
        </Routes>
        )}
      </router>
    
    </div>
    
  );
}

export default App;
      
      
      