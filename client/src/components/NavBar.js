import React from "react"

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

        </div>
    )
}


export default NavBar;

