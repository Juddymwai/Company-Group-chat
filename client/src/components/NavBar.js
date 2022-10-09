import React from "react"
import { Link } from "react-router-dom";

function NavBar({user, setUser}){
    function handleLogout(){
        fetch('/logout',{method: "DELETE"})
        .then((resp)=> {
            if (resp.ok){
                setUser(null);
            }
        })
    }


    return(
        <div>
        <div>
            <link to="/">Home</link>

        </div>
        <div>
            {user ? (
                <button onClick={handleLogout}>Logout</button>
            ):(
                <>
                <link to= "/signup">SignUp</link>
                <link to= '/login'>Login</link>

                </>
            
            )}
        </div>
        </div>
    );
}


export default NavBar;

