// import logo from './logo.svg';
// import './App.css';



import React,{ useState,useEffect} from "react";
import Login from "./Login";

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
      <Login setUser={setUser}/>
    </div>
    
  );
}

export default App;
