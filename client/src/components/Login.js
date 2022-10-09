import React, {useState} from "react";


function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <form>
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