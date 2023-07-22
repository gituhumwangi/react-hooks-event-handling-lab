// Code EyesOnMe Component Here
// import { useState } from "react"
import React, {useState}  from "react"

function EyesOnMe () {
   const [isFocus, setIsFocus] = useState(false)
   console.log({isFocus, setIsFocus})

function handleClick (event) {
    setIsFocus(!isFocus)

    // (isFocus ? "Good!": "Hey! Eyes on me!")

}

    return (
    <div>
        <button onClick={handleClick}>{isFocus ? "Good!": "Hey! Eyes on me!"}</button>
    </div>
    )
}

export default EyesOnMe
