// import logo from './logo.svg';
// import './App.css';
import React,{ useState,useEffect} from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import {BrowserRouter as Router, Routes,Route, Switch} from "react-router-dom"
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
      <h1>hello</h1>
  
      
      <main>
        {user ? (
          <Routes>
            <Route path="/">
              <Home user={user}/>
            </Route>
          </Routes>
          
        ) : (
          
          <Router>
            <NavBar user={user} setUser={setUser} />
            <Routes>
            <Route path="/signup" element={<SignUp setUser={setUser} />}>
              
            </Route>
            <Route path="/login" element={<Login setUser={setUser} />}>
              
            </Route>
            <Route path="/" element={<Home />}>
              
            </Route>
            </Routes>
          </Router>
        )}
      </main>
    
      {/* <Router>
      
        <NavBar user={user} setUser={setUser}/>
        {user ? (
        <Routes>
          <Route exact path="/"><Home setUser={setUser}/></Route> 
          </Routes>
        ): (
          <Routes>

            <Route exact path="/signup"><SignUp setUser={setUser}/></Route>
            <Route exact path="/login"><Login setUser={setUser}/></Route>
          
        </Routes>
        )}
      </Router> */}

      
    
      {/* <NavBar setUser={setUser} user={user}/>
    
      

      <Home setUser={setUser}/> */}
    
    </div>
    
  );
}

export default App;
      
      
      