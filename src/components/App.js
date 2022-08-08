import '../styles/App.css';
import TopBar from "./TopBar";
import React, {useState} from "react";
import Main from "./Main";
import {TOKEN_KEY} from "../constants";

// upper call is from the index.js
function App() {

    // the constant for log in state for other component
    const [isLoggedIn, setIsLoggedIn] = useState(
        //  here have a isLoggIn and a function that set this variety
        !!localStorage.getItem(TOKEN_KEY)
        //    if there is a token, we think it is logged in
        //    use state is a function that directly change the value of the isLoggedIn
    );


    // create a state and give the topbar component through hook
    const logout = () => {
        console.log("logout");
        localStorage.removeItem(TOKEN_KEY)
        setIsLoggedIn(false);
    }


    // Call back function for setState isLoggedIn
    const loggedIn = (token) => {
        if (token) {
            localStorage.setItem(TOKEN_KEY, token);
            setIsLoggedIn(true);
        }
    };


    return (
        //transfer the use state and the function that needed
        <div className="App">
            <TopBar isLoggedIn={isLoggedIn} handleLogout={logout}/>
            <Main isLoggedIn={isLoggedIn} handleLoggedIn={loggedIn}/>
        </div>
    );
}

export default App;
