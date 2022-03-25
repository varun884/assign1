import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import Counter from "./Counter";
import Day1 from "./Day1";
import Day2 from "./Day2";
import Day3 from "./Day3";
import Day4 from "./Day4";
import Day5 from "./Day5";
import Navbar from "./Navbar";

function App() {
  return (
    // <div>
    //   <h1>Assignment Day 1</h1>
    //   <Counter />
    // </div>
      <Router>
         <h1>Assignment Day 1</h1>
         <h2>Date :- 23-03-2022</h2>
      <Navbar />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/day1" element={<Day1 />} />
        <Route path="/day2" element={<Day2 />} />
        <Route path="/day3" element={<Day3 />} />
        <Route path="/day4" element={<Day4 />} />
        <Route path="/day5" element={<Day5 />} />
        {/* <Route path="todo" element={<Todo />} /> */}
        
      </Routes>
    </Router>
  );
}

export default App;
