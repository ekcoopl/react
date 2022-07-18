import React, {useState, useEffect } from "react";
import Counter from "./components/Counter"

function App() {
  const [likes, setLikes] = useState(5)
  
  

  return (
    <div className="App">
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
