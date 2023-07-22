// Code Keypad Component Here
import React from "react";

function Keypad (){
    function handleChange () {
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" placeholder="Type something" onChange={handleChange}></input>
        </div>
    )
}

export default Keypad;