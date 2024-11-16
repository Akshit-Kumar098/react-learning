import { useState } from "react";
function Profile(){
    const[loggedIn,setLoggedIn]=useState(true)
    return(
        <div>
           {
            loggedIn? <h1>known component</h1>: <h1>unknown component</h1>
           }
        </div>
    )
}
export default Profile;