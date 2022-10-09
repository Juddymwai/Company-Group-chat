// import logo from './logo.svg';
// import './App.css';
import React,{ useState,useEffect} from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";

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
      <h1>hello</h1>
      <Home user={user}/>
      <Login setUser={setUser}/>
      <SignUp setUser={setUser}/>
    </div>
    
  );
}

export default App;
