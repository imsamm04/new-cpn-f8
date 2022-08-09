import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

const courses = [
  {
    id: 1,
    name: "HTML, CSS",
  },
  {
    id: 2,
    name: "JavaScript",
  },
  {
    id: 3,
    name: "ReactJS",
  },
];

function App() {
  const [checked, setChecked] = useState();

  console.log(checked);

  const handleSubmit = () => {};

  return (
    <div className="App">
      {courses.map((course) => (
        <div key={course.id}>
          <input type="radio" checked={checked === course.id} onChange={() => setChecked(course.id)} />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
