import React,{useEffect,useState} from 'react'

const Counter = () => {

    const [count,setCount] = useState(0)
    const [btnState,setBtnState] = useState(false)

    const btnClick = () => {
        if(count >= 10) {
            setBtnState(true)
        }
        else {
            setCount(count => count+1)
        }
    }

  return (
    <div>
        <h1  style={{backgroundColor:"lightblue"}}>Counter App</h1>
        <h2>Count : {count}</h2>
        <button onClick={btnClick} style={{background:"lightblue"}}disabled={btnState}>Increase</button>
    </div>
  )
}

export default Counter