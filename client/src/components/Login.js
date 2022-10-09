import React, {useState} from "react";


function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        fetch('/login',{
            method: "POST", 
        headers: {"Content-Type":"application/json"
    }, 
        body: JSON.stringify({username, password}),
    }).then((r)=>{
            if (r.ok){ 

                r.json().then((user) => setUsername(user));
        }
    });
    }

    return (
        <div>
            <form>
                <h1>Login</h1>
                <input

                    type="text"
                    value={username}
                    id= "username"
                    onChange= {(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <br/>
                <input
                    type="text"
                    value={password}
                    id= "password"
                    onChange= {(e) => setPassword(e.target.value)}
                    placeholder="Password"

                />
            </form>
        </div>
    )
    

}
export default Login