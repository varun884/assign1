import React,{useState,useEffect} from 'react'

const Effect = () => {

    const [count,setCount] = useState(0)
    

    useEffect(() => {
        console.log("useEffect Called")
    },[count])

    const btnPress = () => {
        setCount(count => count+1)
    }

    

  return (
    <div>
        <h1>Its A useEffect</h1>
        <button onClick={btnPress}>Click Me</button>
        <h2>Count : {count}</h2>
       
    </div>
  )
}

export default Effect