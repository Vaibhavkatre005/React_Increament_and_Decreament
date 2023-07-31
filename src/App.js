import React, { useState } from "react";
import "./App.css"

const App = () =>{

    const state = useState()
    const [countNum, setCountNum]=useState(0);
    const Incr=()=>{
        setCountNum(countNum+1)
        // console.log(`the count: ${countNum++}`)
    };
    const Decr=()=>{
        setCountNum(countNum-1)
    }
    return(
        <div className="App-header">
            <h1>{countNum}</h1>
            <div className="buttonClass">
              <button onClick={Incr}>Increament</button>
              <button onClick={Decr}>Decreament</button>
            </div>
            
            
        </div>
    )
}

export default App