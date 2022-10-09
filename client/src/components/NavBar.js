import React from "react"

function Home(){
    if (user){
        return <h2> Welcome, {user.username}!</h2>;

    } else {
        return <h2>Kindly Login or Sign Up</h2>
    }
}


export default Home ;

