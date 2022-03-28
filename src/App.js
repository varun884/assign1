import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import Counter from "./Counter";
import Day1 from "./Day1";
import Day2 from "./Day2";
import Effect from './Effect';
import Todolist from "./Todolist";
import Fileupload from "./Fileupload";
import Apis from "./Apis";
import Navbar from "./Navbar";

function App() {
  return (
    
      <Router>
         <h1>Assignment Day 1</h1>
         <h2>Date :- 23-03-2022</h2>
      <Navbar />
      <Routes>
      <Route path="/" element={<Counter />} />
        <Route path="/day1" element={<Day1 />} />
        <Route path="/day2" element={<Day2 />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/Todolist" element={<Todolist />} />
        <Route path="/Fileupload" element={<Fileupload />} />
        <Route path="/Apis" element={<Apis />} />
      </Routes>
    </Router>
  );
}

export default App;
