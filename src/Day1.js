import React from 'react'
import image from './images/output.png'

const Day1 = () => {
  return (
    <div>
      <h3>Assignment Day 1</h3>
      <p>Make A react application with react-router v6 for 
whole 5 days repeat sessions. As heading of the page 
there should be assignment name and date below it. 
Make a counter application. There should be 
validations applied like minimum 0 and max 100000. 
UI should handle display as number of digits increase.
Provide ideas ford display if validation error occurs. In
application disable the button if error occurs.
</p>
<img src={image} />
    </div>
  )
}

export default Day1