import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <Link to='/day1'>repeat Day 1</Link><br/>
        <Link to='/day2'>repeat Day 2</Link><br/>
        <Link to='/Effect'>repeat Day 3</Link><br/>
        <Link to='/day4'>repeat Day 4</Link><br/>
        <Link to='/day5'>repeat Day 5</Link><br/>

    </div>
  )
}

export default Navbar