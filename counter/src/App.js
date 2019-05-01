import React from 'react';
import './App.css';
import Counter from "./Counter"


function App() {
  
  let style = {
    backgroundColor: "#f59a1a",
    margin: "20px",
    padding: "20px"
  }
  return (
    <div style={style} className="App">
      <Counter  /> 
    </div>
  );
}

export default App;
