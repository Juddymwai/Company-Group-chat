import React, {useState} from "react";

function SignUp(){

    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPassword, setConfirmPassword]= useState('');

    function handleSubmit(){
        e.preventDefault();
        fetch('/login',{
            method: "POST", 
        headers: {"Content-Type":"application/json"

        }, 

        body: JSON.stringify({username, password}),

        }).then((r)=>{
            if (r.ok){ 

                r.json().then((user) => setUser(user));

            }
        });
    }

    return
}

export default SignUp;