import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";
import "./styles/App.css";
import PostItem from "./components/PostItem";

function App() {
  const [likes, setLikes] = useState(5);

  return (
    <div className="App">
      <PostItem/>
      <PostItem/>
      <PostItem/>
      <PostItem/>
      <PostItem/>
      <PostItem/>
    </div>
  );
}

export default App;
