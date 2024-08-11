import React,{useContext} from "react";
import UserContext from "../context/UserContext";
import UserContextProvider from "../context/UserContextProvider";

function Profile(){
    const {user}=useContext(UserContext);
    if(!user){
        return <div>Please Login</div>
    }
    else{
        return <div>Welcom {user.username}</div>
    }
}

export default Profile;